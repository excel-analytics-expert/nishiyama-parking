const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

process.env.TZ = 'Asia/Tokyo';
const source = fs.readFileSync(path.join(__dirname, '../js/script.js'), 'utf8');

// Run the actual form handlers with a fixed clock and minimal DOM elements.
function page(now = '2026-10-07T10:15:00+09:00', code = source) {
  const elements = new Map();
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, {
        value: '', textContent: '', innerHTML: '', handlers: {},
        addEventListener(event, handler) { this.handlers[event] = handler; },
        dispatch(event) { this.handlers[event]({ preventDefault() {} }); }
      });
      return elements.get(id);
    },
    addEventListener(event, handler) { handler(); }
  };
  const clock = new Date(now).getTime();
  class FixedDate extends Date {
    constructor(...args) { super(...(args.length ? args : [clock])); }
    static now() { return clock; }
  }
  vm.runInNewContext(code, { document, Date: FixedDate, console, alert() {}, setTimeout, navigator: {} });
  const el = id => document.getElementById(id);
  function plan(entry, exit) {
    [el('manualDate').value, el('manualTime').value] = entry.split('T');
    [el('plannedExitDate').value, el('plannedExitTime').value] = exit.split('T');
    el('plannedFeeForm').dispatch('submit');
  }
  return { el, plan };
}

test('planned total is separate from the current fee; both languages show the target', () => {
  const p = page();
  p.el('manualDate').value = '2026-10-07';
  p.el('manualTime').value = '10:00';
  p.el('manualEntryForm').dispatch('submit');
  const current = p.el('estimatedFee').textContent;
  assert.equal(current, '¥300');
  p.plan('2026-10-07T10:00', '2026-10-07T11:00');
  assert.equal(p.el('plannedFee').textContent, '¥1,200');
  assert.equal(p.el('estimatedFee').textContent, current);
  assert.match(p.el('plannedFeeSummary').textContent, /2026-10-07 11:00まで/);
  assert.match(p.el('plannedFeeSummary').textContent, /Estimated total if you leave at 2026-10-07 11:00/);
});

test('weekend rate and partial 15-minute period', () => {
  const p = page('2026-10-10T10:15:00+09:00');
  p.plan('2026-10-10T10:00', '2026-10-10T10:16');
  assert.equal(p.el('plannedFee').textContent, '¥400');
});

test('night short stay and cap use the existing rates', () => {
  const p = page('2026-10-07T21:05:00+09:00');
  p.plan('2026-10-07T21:00', '2026-10-07T21:15');
  assert.equal(p.el('plannedFee').textContent, '¥300');
  p.plan('2026-10-07T21:00', '2026-10-07T23:00');
  assert.equal(p.el('plannedFee').textContent, '¥1,800');
});

test('night cap survives midnight and regular charges resume after 06:00', () => {
  const p = page('2026-10-07T21:05:00+09:00');
  p.plan('2026-10-07T21:00', '2026-10-08T06:00');
  assert.equal(p.el('plannedFee').textContent, '¥1,800');
  p.plan('2026-10-07T21:00', '2026-10-08T06:01');
  assert.equal(p.el('plannedFee').textContent, '¥2,100');
  p.plan('2026-10-07T21:00', '2026-10-09T06:00');
  assert.equal(p.el('plannedFee').textContent, '¥21,600');
});

test('Friday-to-Saturday rate switches within the same capped night', () => {
  const p = page('2026-10-09T23:35:00+09:00');
  p.plan('2026-10-09T23:30', '2026-10-10T00:30');
  assert.equal(p.el('plannedFee').textContent, '¥1,000');
});

test('Next.js fee calculation agrees with the static form at night boundaries', () => {
  const ts = require('typescript');
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../lib/parkingLogic.ts'), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports });
  for (const [start, end, expected] of [
    ['2026-10-07T21:00', '2026-10-08T06:00', 1800],
    ['2026-10-07T21:00', '2026-10-08T06:01', 2100],
    ['2026-10-09T23:30', '2026-10-10T00:30', 1000]
  ]) assert.equal(exports.calculateFee(new Date(start), new Date(end)), expected);
});

test('missing, invalid, future entry, past departure, and reversed range show no amount', () => {
  for (const [entry, exit] of [
    ['2026-10-07T', '2026-10-07T11:00'],
    ['invalidT10:00', '2026-10-07T11:00'],
    ['2026-10-07T11:00', '2026-10-07T12:00'],
    ['2026-10-07T10:00', '2026-10-07T10:01'],
    ['2026-10-07T10:00', '2026-10-07T09:00']
  ]) {
    const p = page();
    p.plan(entry, exit);
    assert.equal(p.el('plannedFee').textContent, '¥---');
    assert.match(p.el('plannedFeeError').textContent, /Please|Entry/);
  }
});

test('editing any input clears a stale planned result without altering the current fee', () => {
  const p = page();
  for (const id of ['manualDate', 'manualTime', 'plannedExitDate', 'plannedExitTime']) {
    p.plan('2026-10-07T10:00', '2026-10-07T11:00');
    p.el('estimatedFee').textContent = '¥300';
    p.el(id).dispatch('input');
    assert.equal(p.el('plannedFee').textContent, '¥---');
    assert.equal(p.el('plannedFeeSummary').textContent, '');
    assert.equal(p.el('estimatedFee').textContent, '¥300');
  }
});

module.exports = { page };
