export type Language = 'ja' | 'en' | 'zh' | 'ko';

export interface Tenant {
  id: string;
  name: string;
  category: string;
  description: string;
  discount: string;
  image: string;
}

export const translations = {
  ja: {
    nav: { home: "ホーム", guide: "利用方法", manual: "操作説明", tenants: "提携店舗", access: "アクセス" },
    hero: { title: "西山興業赤坂ビル駐車場", subtitle: "赤坂の中心で、安心と格式ある駐車体験を。" },
    guide: {
      title: "駐車場の利用手順",
      step1_title: "1. 入庫 (Entry)",
      step1_desc: "車両入庫後に管理人から駐車券を受け取ってください。（管理人は多言語に対応しておりません）",
      step2_title: "2. 出庫準備 (Payment)",
      step2_desc: "管理人に駐車券を渡し、料金をお支払いください。日本円・現金のみ対応しています。",
      step3_title: "3. 出庫 (Exit)",
      step3_desc: "管理人の誘導に従い、後方の回転盤（ターンテーブル）まで後退してください。回転後、安全に出庫してください。"
    },
    manual: {
      title: "アプリ操作説明",
      calc_title: "料金シミュレーション",
      calc_desc: "ホーム画面の「今いくら？」タブに駐車券の入庫日時を入力すると、現在の概算料金が表示されます。「予算計算」タブでは出庫予定日時に対する料金も計算可能です。",
      tenant_title: "提携店舗の検索",
      tenant_desc: "「提携店舗」メニューでは、駐車料金割引サービスのある店舗を確認できます。各店舗の詳細や割引条件をご覧いただけます。",
      access_title: "アクセス情報の活用",
      access_desc: "「アクセス」メニューには地図と住所が表示されます。「住所をコピー」ボタンを押すと、ナビ設定用に住所をクリップボードにコピーできます。"
    },
    access: {
      title: "アクセス",
      address: "〒107-0052 東京都港区赤坂2-15-18",
      copy_btn: "住所をコピー", copy_done: "コピーしました！",
      map_title: "Googleマップ"
    },
    calculator: { title: "料金シミュレーション", tab_check: "今いくら？", tab_budget: "予算計算", placeholder_time: "入庫時間を入力", button_calc: "計算する", result: "現在の料金", currency: "円" },
    tenants_list: [
      { id: "1", name: "レストラン 赤坂 雅", category: "日本料理", description: "旬の食材を使用した本格懐石料理。個室完備で接待にも最適です。", discount: "5,000円以上のご利用で2時間無料", image: "/images/tenant-restaurant.jpg" },
      { id: "2", name: "アカサカ・メディカルクリニック", category: "クリニック", description: "内科・皮膚科・アレルギー科。最新の医療機器を備えた都心のクリニック。", discount: "診察・会計時に駐車券提示で1時間無料", image: "/images/tenant-clinic.jpg" },
      { id: "3", name: "Fitness Club AXIS", category: "フィットネス", description: "24時間営業、最新マシン完備の会員制フィットネスクラブ。", discount: "会員様は最大3時間無料", image: "/images/tenant-gym.jpg" }
    ]
  },
  en: {
    nav: { home: "Home", guide: "Guide", manual: "App Usage", tenants: "Tenants", access: "Access" },
    hero: { title: "Nishiyama Kogyo Akasaka Parking", subtitle: "Experience premium parking in the heart of Akasaka." },
    guide: {
      title: "Parking Guide",
      step1_title: "1. Entry",
      step1_desc: "Receive a parking ticket from the attendant after parking. (The attendant may not speak multiple languages.)",
      step2_title: "2. Payment",
      step2_desc: "Give your ticket to the attendant and pay the fee. Cash only (JPY).",
      step3_title: "3. Exit",
      step3_desc: "Reverse to the turntable at the rear under the attendant's guidance. Exit carefully after rotation."
    },
    manual: {
      title: "App Usage",
      calc_title: "Fee Simulation",
      calc_desc: "Enter your entry time in the 'Current Fee' tab on the Home screen to check the estimated fee. Use 'Budget Plan' to calculate for a future exit time.",
      tenant_title: "Find Tenants",
      tenant_desc: "Check the 'Tenants' menu for shops offering parking discounts. You can view details and discount conditions for each shop.",
      access_title: "Access Info",
      access_desc: "The 'Access' menu shows the map and address. Use the 'Copy Address' button to copy the address for your navigation system."
    },
    access: {
      title: "Access",
      address: "2-15-18 Akasaka, Minato-ku, Tokyo 107-0052",
      copy_btn: "Copy Address", copy_done: "Copied!",
      map_title: "Google Map"
    },
    calculator: { title: "Fee Simulator", tab_check: "Current Fee", tab_budget: "Budget Plan", placeholder_time: "Enter Entry Time", button_calc: "Calculate", result: "Current Charge", currency: "JPY" },
    tenants_list: [
      { id: "1", name: "Restaurant Akasaka MIYABI", category: "Japanese Cuisine", description: "Authentic Kaiseki cuisine.", discount: "2 hours free > 5,000 JPY", image: "/images/tenant-restaurant.jpg" },
      { id: "2", name: "Akasaka Medical Clinic", category: "Clinic", description: "Internal medicine, dermatology.", discount: "1 hour free with ticket", image: "/images/tenant-clinic.jpg" },
      { id: "3", name: "Fitness Club AXIS", category: "Fitness", description: "24-hour members-only club.", discount: "Up to 3 hours free", image: "/images/tenant-gym.jpg" }
    ]
  },
  zh: {
    nav: { home: "主页", guide: "使用指南", manual: "操作说明", tenants: "合作商铺", access: "交通" },
    hero: { title: "西山兴业赤坂大厦停车场", subtitle: "在赤坂中心体验安全且高格调的停车服务。" },
    guide: {
      title: "停车场使用流程",
      step1_title: "1. 入库 (Entry)",
      step1_desc: "停车后请从管理员处领取停车券。（管理员可能无法使用多种语言）",
      step2_title: "2. 缴费 (Payment)",
      step2_desc: "请将停车券交给管理员并支付费用。仅限日元现金。",
      step3_title: "3. 出库 (Exit)",
      step3_desc: "请在管理员引导下倒车至后方转盘（Turntable）。旋转后请安全驶出。",
    },
    manual: {
      title: "应用操作说明",
      calc_title: "费用模拟",
      calc_desc: "在主页的“当前费用”标签输入入库时间即可查看估算费用。使用“预算计算”可计算预计出库时的费用。",
      tenant_title: "商铺搜索",
      tenant_desc: "在“合作商铺”菜单查看提供停车优惠的店铺。您可以查看各店铺的详情和优惠条件。",
      access_title: "交通信息",
      access_desc: "“交通”菜单显示地图和地址。使用“复制地址”按钮可将地址复制到剪贴板以便设置导航。"
    },
    access: {
      title: "交通",
      address: "〒107-0052 东京都港区赤坂2-15-18",
      copy_btn: "复制地址", copy_done: "已复制！",
      map_title: "谷歌地图"
    },
    calculator: { title: "费用模拟", tab_check: "当前费用", tab_budget: "预算计算", placeholder_time: "输入入库时间", button_calc: "计算", result: "当前费用", currency: "日元" },
    tenants_list: [
      { id: "1", name: "餐厅 赤坂 雅", category: "日本料理", description: "正宗怀石料理。", discount: "满5,000日元免2小时", image: "/images/tenant-restaurant.jpg" },
      { id: "2", name: "Akasaka Medical Clinic", category: "Clinic", description: "内科、皮肤科、过敏科。配备最新医疗设备的市中心诊所。", discount: "就诊结账时出示停车券可免费1小时", image: "/images/tenant-clinic.jpg" },
      { id: "3", name: "Fitness Club AXIS", category: "Fitness", description: "24小时营业，配备最新机器的会员制健身俱乐部。", discount: "会员最多免费3小时", image: "/images/tenant-gym.jpg" }
    ]
  },
  ko: {
    nav: { home: "홈", guide: "이용 방법", manual: "앱 설명", tenants: "제휴 매장", access: "오시는 길" },
    hero: { title: "니시야마 흥업 아카사카 빌딩 주차장", subtitle: "아카사카의 중심에서 안심할 수 있는 품격 있는 주차 경험을。" },
    guide: {
      title: "주차장 이용 순서",
      step1_title: "1. 입차 (Entry)",
      step1_desc: "주차 후 관리인에게 주차권을 수령해 주십시오. (관리인은 다국어 대응이 어렵습니다)",
      step2_title: "2. 정산 (Payment)",
      step2_desc: "관리인에게 주차권을 건네고 요금을 지불해 주십시오. 일본 엔화 현금만 가능합니다.",
      step3_title: "3. 출차 (Exit)",
      step3_desc: "관리인의 유도에 따라 후방의 회전판(턴테이블)까지 후진해 주십시오. 회전 후 안전하게 출차해 주십시오."
    },
    manual: {
      title: "앱 조작 설명",
      calc_title: "요금 시뮬레이션",
      calc_desc: "홈 화면의 '현재 요금' 탭에 입차 시간을 입력하면 예상 요금이 표시됩니다. '예산 계산' 탭에서는 출차 예정 시간에 대한 요금도 계산 가능합니다.",
      tenant_title: "제휴 매장 검색",
      tenant_desc: "'제휴 매장' 메뉴에서 주차 할인 서비스가 있는 매장을 확인할 수 있습니다. 각 매장의 상세 정보와 할인 조건을 확인하세요.",
      access_title: "오시는 길 활용",
      access_desc: "'오시는 길' 메뉴에는 지도와 주소가 표시됩니다. '주소 복사' 버튼을 누르면 내비게이션 설정을 위해 주소를 클립보드에 복사할 수 있습니다."
    },
    access: {
      title: "오시는 길",
      address: "〒107-0052 도쿄도 미나토구 아카사카 2-15-18",
      copy_btn: "주소 복사", copy_done: "복사되었습니다!",
      map_title: "구글 지도"
    },
    calculator: { title: "요금 시뮬레이션", tab_check: "현재 요금", tab_budget: "예산 계산", placeholder_time: "입차 시간 입력", button_calc: "계산하기", result: "현재 요금", currency: "엔" },
    tenants_list: [
      { id: "1", name: "레스토랑 아카사카 미야비", category: "일본 요리", description: "정통 가이세키 요리。", discount: "5,000엔 이상 2시간 무료", image: "/images/tenant-restaurant.jpg" },
      { id: "2", name: "Akasaka Medical Clinic", category: "Clinic", description: "내과, 피부과, 알레르기과. 최신 의료 기기를 갖춘 도심 클리닉.", discount: "진찰 시 1시간 무료", image: "/images/tenant-clinic.jpg" },
      { id: "3", name: "Fitness Club AXIS", category: "Fitness", description: "24시간 영업, 최신 머신 완비.", discount: "회원 최대 3시간 무료", image: "/images/tenant-gym.jpg" }
    ]
  }
};
