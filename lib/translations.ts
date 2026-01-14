export type Language = 'ja' | 'en' | 'zh' | 'ko';

export interface Tenant {
  id: string;
  name: string;
  category: string;
  description: string;
  discount: string;
  image: string;
}

const sharedLegacy = {
  header: { title: "西山興業赤坂ビル駐車場", subtitle: "Premium Parking" },
  rates: { title: "Rates", weekdays: "Weekdays", weekends: "Weekends", nightMaxRate: "Night Max", nightMaxRateNote: "Recurring", titleRates: "Rates" },
  common: { note: "Tax included", address: "Address", addressFull: "Akasaka 2-15-18", cashOnly: "Cash Only", copied: "Copied" },
  access: { title: "Access", mapTitle: "Map", copyAddress: "Copy Address", copyJapanese: "JP", copyEnglish: "EN", copyNote: "For Navigation" }
};

export const translations = {
  ja: {
    nav: { home: "ホーム", tenants: "提携店舗", access: "アクセス" },
    hero: { title: "西山興業赤坂ビル駐車場", subtitle: "赤坂の中心で、安心と格式ある駐車体験を。" },
    calculator: { title: "料金シミュレーション", tab_check: "今いくら？", tab_budget: "予算計算", placeholder_time: "入庫時間を入力", button_calc: "計算する", result: "現在の料金", currency: "円" },
    tenants_list: [
      { id: "1", name: "レストラン 赤坂 雅", category: "日本料理", description: "旬の食材を使用した本格懐石料理。個室完備で接待にも最適です。", discount: "5,000円以上のご利用で2時間無料", image: "/images/tenant-restaurant.jpg" },
      { id: "2", name: "アカサカ・メディカルクリニック", category: "クリニック", description: "内科・皮膚科・アレルギー科。最新の医療機器を備えた都心のクリニック。", discount: "診察・会計時に駐車券提示で1時間無料", image: "/images/tenant-clinic.jpg" },
      { id: "3", name: "Fitness Club AXIS", category: "フィットネス", description: "24時間営業、最新マシン完備の会員制フィットネスクラブ。", discount: "会員様は最大3時間無料", image: "/images/tenant-gym.jpg" }
    ],
    // Legacy support
    header: { title: "西山興業赤坂ビル駐車場", subtitle: "赤坂の中心で、安心と格式ある駐車体験を。" },
    rates: { title: "料金表", weekdays: "平日", weekends: "土日祝", nightMaxRate: "夜間最大料金", nightMaxRateNote: "※繰り返し適用", titleRates: "料金" },
    common: { note: "※表示料金は税込", address: "所在地", addressFull: "東京都港区赤坂2-15-18", cashOnly: "現金のみ", copied: "コピーしました" },
    access: { title: "アクセス", mapTitle: "地図", copyAddress: "住所をコピー", copyJapanese: "日本語", copyEnglish: "英語", copyNote: "※カーナビ入力用" }
  },
  en: {
    nav: { home: "Home", tenants: "Tenants", access: "Access" },
    hero: { title: "Nishiyama Kogyo Akasaka Parking", subtitle: "Experience premium parking in the heart of Akasaka." },
    calculator: { title: "Fee Simulator", tab_check: "Current Fee", tab_budget: "Budget Plan", placeholder_time: "Enter Entry Time", button_calc: "Calculate", result: "Current Charge", currency: "JPY" },
    tenants_list: [
      { id: "1", name: "Restaurant Akasaka MIYABI", category: "Japanese Cuisine", description: "Authentic Kaiseki cuisine using seasonal ingredients.", discount: "2 hours free with purchase over 5,000 JPY", image: "/images/tenant-restaurant.jpg" },
      { id: "2", name: "Akasaka Medical Clinic", category: "Clinic", description: "Internal medicine, dermatology.", discount: "1 hour free upon presentation of parking ticket", image: "/images/tenant-clinic.jpg" },
      { id: "3", name: "Fitness Club AXIS", category: "Fitness", description: "24-hour members-only fitness club.", discount: "Up to 3 hours free for members", image: "/images/tenant-gym.jpg" }
    ],
    ...sharedLegacy
  },
  zh: {
    nav: { home: "主页", tenants: "合作商铺", access: "交通" },
    hero: { title: "西山兴业赤坂大厦停车场", subtitle: "在赤坂中心体验安全且高格调的停车服务。" },
    calculator: { title: "费用模拟", tab_check: "当前费用", tab_budget: "预算计算", placeholder_time: "输入入库时间", button_calc: "计算", result: "当前费用", currency: "日元" },
    tenants_list: [{ id: "1", name: "餐厅 赤坂 雅", category: "日本料理", description: "使用时令食材的正宗怀石料理。", discount: "消费满5,000日元可免费停车2小时", image: "/images/tenant-restaurant.jpg" }, { id: "2", name: "Akasaka Medical Clinic", category: "Clinic", description: "Internal medicine, dermatology.", discount: "1 hour free upon presentation of parking ticket", image: "/images/tenant-clinic.jpg" }, { id: "3", name: "Fitness Club AXIS", category: "Fitness", description: "24-hour members-only fitness club.", discount: "Up to 3 hours free for members", image: "/images/tenant-gym.jpg" }],
    ...sharedLegacy
  },
  ko: {
    nav: { home: "홈", tenants: "제휴 매장", access: "오시는 길" },
    hero: { title: "니시야마 흥업 아카사카 빌딩 주차장", subtitle: "아카사카의 중심에서 안심할 수 있는 품격 있는 주차 경험을。" },
    calculator: { title: "요금 시뮬레이션", tab_check: "현재 요금", tab_budget: "예산 계산", placeholder_time: "입차 시간 입력", button_calc: "계산하기", result: "현재 요금", currency: "엔" },
    tenants_list: [{ id: "1", name: "레스토랑 아카사카 미야비", category: "일본 요리", description: "제철 식재료를 사용한 정통 가이세키 요리。", discount: "5,000엔 이상 이용 시 2시간 무료", image: "/images/tenant-restaurant.jpg" }, { id: "2", name: "Akasaka Medical Clinic", category: "Clinic", description: "Internal medicine, dermatology.", discount: "1 hour free upon presentation of parking ticket", image: "/images/tenant-clinic.jpg" }, { id: "3", name: "Fitness Club AXIS", category: "Fitness", description: "24-hour members-only fitness club.", discount: "Up to 3 hours free for members", image: "/images/tenant-gym.jpg" }],
    ...sharedLegacy
  }
};
