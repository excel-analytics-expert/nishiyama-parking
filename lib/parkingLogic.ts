// ===== 夜間判定（21:00〜翌6:00） =====
const isNightTime = (date: Date) => {
  const h = date.getHours();
  return (h >= 21 || h < 6);
};

// 「1夜」の境界を返す（その時刻が属する夜の開始と終了）
// 夜開始: 当日21:00、夜終了: 翌日06:00（※6時ちょうどは夜間外）
const getNightSessionBounds = (date: Date) => {
  const d = new Date(date);
  const start = new Date(d);
  start.setHours(21, 0, 0, 0);

  let end = new Date(start);
  end.setDate(start.getDate() + 1);
  end.setHours(6, 0, 0, 0);

  // もし date が 0:00〜5:59 なら、前日の21:00を開始とし、当日6:00を終了にする
  if (d.getHours() < 6) {
    start.setDate(start.getDate() - 1); // 前日の21:00
    end.setDate(end.getDate() - 1);     // 当日の06:00
  }
  return { start, end };
};

export const calculateFee = (entryDate: Date, exitDate: Date = new Date()): number => {
    if (entryDate > exitDate) return 0;
    let totalFee = 0;
    const NIGHT_MAX = 1800;
    let nightAccum = 0;
    let inNight = isNightTime(entryDate);

    // 今いる夜セッションの終了境界（inNightのときだけ有効）
    let nightBounds = inNight ? getNightSessionBounds(entryDate) : null;

    // 15分刻みで加算
    let t = new Date(entryDate);
    while (t < exitDate) {
      const next = new Date(t);
      next.setMinutes(next.getMinutes() + 15);

      // このスロット開始時点の土日/平日レートを決定
      const ratePer15 = (t.getDay() === 0 || t.getDay() === 6) ? 200 : 300;

      if (isNightTime(t)) {
        // 夜間
        if (!inNight) {
          // 新規夜間セッション開始
          inNight = true;
          nightAccum = 0;
          nightBounds = getNightSessionBounds(t);
        }

        // 夜間料金は上限まで
        if (nightAccum < NIGHT_MAX) {
          nightAccum += ratePer15;
          if (nightAccum > NIGHT_MAX) {
            // 超過分はカット
            const over = nightAccum - NIGHT_MAX;
            totalFee += (ratePer15 - over);
            nightAccum = NIGHT_MAX;
          } else {
            totalFee += ratePer15;
          }
        }
        // セッション終了判定：翌6:00を過ぎたらリセット
        if (nightBounds && next >= nightBounds.end) {
          inNight = false;
          nightAccum = 0;
          nightBounds = null;
        }
      } else {
        // 昼間
        inNight = false; // 念のため
        nightAccum = 0;
        nightBounds = null;
        totalFee += ratePer15;
      }

      t = next;
    }

    return totalFee;
};
