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
    hero: { title: "西山興業赤坂ビル有料駐車場", subtitle: "赤坂の中心で、安心と格式ある駐車体験を。" },
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
      { id: "1", name: "NEXT Akasaka-Base (2F)", category: "コミュニティ・ジム", description: "「大人の部活」をコンセプトに、キックボクシングやヨガを楽しめるアットホームな空間。元王者による本格指導を仕事帰りに手ぶらで体験。", discount: "1時間無料サービス（受付にて駐車券をご提示ください）", image: "/images/tenants/next-akasaka-base.png" },
      { id: "2", name: "うおバル アフロ (1F)", category: "シーフードバル", description: "鮮度抜群の魚介をリーズナブルに。名物「蟹のパスタ」や牡蠣料理が人気。カウンター席もあり、お一人様からカジュアルに楽しめます。", discount: "1時間無料サービス（3,000円以上のご利用）", image: "/images/tenants/uobal-afro.png" },
      { id: "3", name: "中国料理 たけくま (1F)", category: "中国料理", description: "中国赤酢を活かした本格派. 芳醇な香りの「酸辣湯麺」や「担々麺」はリピーター続出の逸品。落ち着いた空間で上質なランチ・ディナーを。", discount: "1時間無料サービス（ランチ・ディナーご利用時）", image: "/images/tenants/takekuma.png" }
    ]
  },
  en: {
    nav: { home: "Home", guide: "Guide", manual: "App Usage", tenants: "Tenants", access: "Access" },
    hero: { title: "Nishiyama Kogyo Akasaka Paid Parking", subtitle: "Experience premium parking in the heart of Akasaka." },
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
      { id: "1", name: "NEXT Akasaka-Base (2F)", category: "Community & Gym", description: "A friendly space based on the concept of 'club activities for adults,' where you can enjoy kickboxing and yoga. Experience professional guidance from former champions empty-handed after work.", discount: "1-hour free (Show ticket at reception)", image: "/images/tenants/next-akasaka-base.png" },
      { id: "2", name: "Uobar Afro (1F)", category: "Seafood Bar", description: "Fresh seafood at reasonable prices. The specialty 'Crab Pasta' and oyster dishes are popular. Counter seating available for solo diners.", discount: "1-hour free for 3,000+ JPY", image: "/images/tenants/uobal-afro.png" },
      { id: "3", name: "Chinese Restaurant Takekuma (1F)", category: "Chinese Cuisine", description: "Authentic flavors using Chinese red vinegar. The fragrant 'Hot and Sour Noodles' and 'Dandan Noodles' keep regulars coming back. Enjoy high-quality lunch and dinner in a calm atmosphere.", discount: "1-hour free for lunch/dinner", image: "/images/tenants/takekuma.png" }
    ]
  },
  zh: {
    nav: { home: "主页", guide: "使用指南", manual: "操作说明", tenants: "合作商铺", access: "交通" },
    hero: { title: "西山兴业赤坂大厦有偿停车场", subtitle: "在赤坂中心体验安全且高格调的停车服务。" },
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
      { id: "1", name: "NEXT Akasaka-Base (2F)", category: "社区健身房", description: "以“成人的部社活动”为理念，可以享受踢拳和瑜伽的温馨空间。下班后可空手体验前冠军的专业指导。", discount: "免费停车1小时（请在接待处出示停车券）", image: "/images/tenants/next-akasaka-base.png" },
      { id: "2", name: "鱼吧 Afro (1F)", category: "海鲜酒吧", description: "价格实惠的极品海鲜。招牌“螃蟹面”和生蚝料理极具人气。设有柜台席位，独自一人也能轻松享受。", discount: "满3,000日元免费停车1小时", image: "/images/tenants/uobal-afro.png" },
      { id: "3", name: "中国料理 竹隈 (1F)", category: "中国料理", description: "活用中国红醋的正宗派。香气浓郁的“酸辣汤面”和“担担面”拥有众多回头客。在安静的空间享受高品质的午餐和晚餐。", discount: "午餐/晚餐期间免费停车1小时", image: "/images/tenants/takekuma.png" }
    ]
  },
  ko: {
    nav: { home: "홈", guide: "이용 방법", manual: "앱 설명", tenants: "제휴 매장", access: "오시는 길" },
    hero: { title: "니시야마 흥업 아카사카 빌딩 유료 주차장", subtitle: "아카사카의 중심에서 안심할 수 있는 품격 있는 주차 경험을。" },
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
      { id: "1", name: "NEXT Akasaka-Base (2F)", category: "커뮤니티 & 짐", description: "'어른들의 부활동'을 컨셉으로 킥복싱과 요가를 즐길 수 있는 아늑한 공간. 전 챔피언의 본격적인 지도를 퇴근 후 빈손으로 체험해 보세요.", discount: "1시간 무료 서비스 (접수 시 주차권 제시)", image: "/images/tenants/next-akasaka-base.png" },
      { id: "2", name: "우오바루 아프로 (1F)", category: "씨푸드 바", description: "신선함이 뛰어난 해산물을 합리적인 가격에. 명물 '게 파스타'와 굴 요리가 인기. 카운터석도 있어 혼자서도 가볍게 즐길 수 있습니다.", discount: "3,000엔 이상 이용 시 1시간 무료", image: "/images/tenants/uobal-afro.png" },
      { id: "3", name: "중국요리 다케쿠마 (1F)", category: "중국 요리", description: "중국 홍초를 활용한 본격파. 풍부한 향의 '산랏탕면'과 '탄탄면'은 단골이 끊이지 않는 일품. 차분한 공간에서 품격 있는 런치와 디너를 즐겨보세요.", discount: "런치/디너 이용 시 1시간 무료", image: "/images/tenants/takekuma.png" }
    ]
  }
};
