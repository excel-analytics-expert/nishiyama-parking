"use client";

import { motion } from "framer-motion";
import {
  Car,
  Building2,
  Ticket,
  Trees,
  ShieldCheck,
  Info,
  MapPin,
  Phone,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Neighborhood() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.12 }}
      className="space-y-6"
    >
      {/* Discount Partners */}
      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-amber-500/40 bg-slate-950/70 p-5 shadow-xl shadow-black/40 backdrop-blur"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
            <Ticket className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-amber-100">
              Discount Partners / 駐車券サービスあり
            </h3>
            <p className="text-[11px] text-slate-400">
              一部店舗・施設にて、ご利用金額に応じた駐車サービス券を発行しています。
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <PartnerCard
            name="近隣レストラン・カフェ"
            jpNote="ご飲食金額に応じて、60〜120分無料サービス券を発行する店舗があります。詳しくは各店舗にてご確認ください。"
            enNote="Some restaurants and cafes offer 60–120 minutes of free parking tickets depending on your bill. Please ask the staff at each shop."
          />
          <PartnerCard
            name="周辺オフィス・テナント"
            jpNote="ビルテナント様向けの長時間利用プラン・月極契約については管理会社までお問い合わせください。"
            enNote="For long-stay and monthly contracts for building tenants, please contact the building management company."
          />
        </div>
      </motion.div>

      {/* Public Spots */}
      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-xl shadow-black/40 backdrop-blur"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-amber-200">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-amber-100">
              Public Spots / 近隣の安心スポット
            </h3>
            <p className="text-[11px] text-slate-400">
              赤坂エリアの公園・交番・公衆トイレなど、安心してご利用いただける公共施設の一例です。
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="mt-0.5">
              <Trees className="h-4 w-4 text-emerald-300" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">
                近隣公園 / Nearby Parks
              </div>
              <p className="text-slate-300">
                ちょっとした休憩やお子様連れの際にご利用いただける、公園・緑地が点在しています。
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="mt-0.5">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">
                交番 / Koban (Police Box)
              </div>
              <p className="text-slate-300">
                道に迷った際やトラブル時には、近隣の交番・警察署をご利用いただけます。
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="mt-0.5">
              <Info className="h-4 w-4 text-amber-300" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">
                公衆トイレ / Public Restrooms
              </div>
              <p className="text-slate-300">
                公共施設・商業施設内に公衆トイレが設置されています。場所は現地案内図やインフォメーションなどでご確認ください。
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Guide */}
      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-xl shadow-black/40 backdrop-blur"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-amber-200">
            <Car className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-amber-100">
              Guide / ご利用方法
            </h3>
            <p className="text-[11px] text-slate-400">
              初めての方でも安心してご利用いただけるよう、入庫から出庫までの流れをまとめました。
            </p>
          </div>
        </div>

        <ol className="space-y-2 text-xs">
          <GuideStep
            step={1}
            title="入庫 / Parking In"
            descriptionJP="空いている区画にお車をお停めいただき、車止めの位置などをご確認ください。"
            descriptionEN="Park your vehicle in an available space and make sure it is properly positioned."
          />
          <GuideStep
            step={2}
            title="精算 / Payment"
            descriptionJP="ご出庫前に精算機にて駐車料金をお支払いください。現金のみ（日本円）でのご利用となります。"
            descriptionEN="Before leaving, please pay the parking fee at the payment machine. Cash only (JPY)."
          />
          <GuideStep
            step={3}
            title="出庫 / Exit"
            descriptionJP="精算完了後は、バーが開きましたら安全を確認の上、ゆっくりとご出庫ください。"
            descriptionEN="After the payment is completed and the bar opens, carefully exit the parking area."
          />
        </ol>

        <div className="mt-4 flex items-start gap-2 border-t border-slate-800 pt-3 text-[11px] text-slate-400">
          <Building2 className="mt-0.5 h-3.5 w-3.5 text-amber-300" />
          <p>
            ビル設備・防災設備等に関するお問い合わせは管理会社までお願いいたします。緊急時は
            110番・119番、または近隣の交番・消防署にご連絡ください。
          </p>
        </div>

        <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
          <MapPin className="h-3.5 w-3.5" />
          <span>東京都港区赤坂2-15-18 西山興業赤坂ビル</span>
        </div>

        <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
          <Phone className="h-3.5 w-3.5" />
          <span>※ お問い合わせ先は現地掲示をご確認ください。</span>
        </div>
      </motion.div>
    </motion.section>
  );
}

type PartnerCardProps = {
  name: string;
  jpNote: string;
  enNote: string;
};

function PartnerCard({ name, jpNote, enNote }: PartnerCardProps) {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-900/70 p-3">
      <div className="mb-1 flex items-center gap-1 text-[11px] font-semibold text-amber-100">
        <Building2 className="h-3 w-3 text-amber-300" />
        {name}
      </div>
      <p className="text-slate-100">{jpNote}</p>
      <p className="mt-1 text-[11px] text-slate-400">{enNote}</p>
    </div>
  );
}

type GuideStepProps = {
  step: number;
  title: string;
  descriptionJP: string;
  descriptionEN: string;
};

function GuideStep({
  step,
  title,
  descriptionJP,
  descriptionEN,
}: GuideStepProps) {
  return (
    <li className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-[11px] font-semibold text-amber-200">
        {step}
      </div>
      <div>
        <div className="text-xs font-semibold text-slate-100">{title}</div>
        <p className="text-slate-200">{descriptionJP}</p>
        <p className="mt-1 text-[11px] text-slate-400">{descriptionEN}</p>
      </div>
    </li>
  );
}

