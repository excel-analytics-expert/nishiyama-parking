document.addEventListener('DOMContentLoaded', () => {

    // --- グローバル変数とUI要素の取得 ---
    const manualEntryForm = document.getElementById('manualEntryForm');
    const manualDateInput = document.getElementById('manualDate');
    const manualTimeInput = document.getElementById('manualTime');
    // ▼▼▼ ここからが変更された部分 ▼▼▼
    const copyAddressJaBtn = document.getElementById('copyAddressJaBtn');
    const copyAddressEnBtn = document.getElementById('copyAddressEnBtn');
    // ▲▲▲ ここまでが変更された部分 ▲▲▲
    const copyFeedback = document.getElementById('copyFeedback');
    
    // --- 初期化処理 ---
    const initializePage = () => {
        // 入庫・出庫手順の表示
        const entryProcessDiv = document.getElementById('entryProcess');
        const exitProcessDiv = document.getElementById('exitProcess');

        if (entryProcessDiv) {
            entryProcessDiv.innerHTML = `
                <h3 class="text-xl font-bold mb-4 text-gray-800">入庫手順 / Entry Process</h3>
                <ol class="list-decimal list-inside space-y-3 text-gray-700">
                    <li>車両入庫後に管理人から駐車券を受け取ってください。<br><span class="text-sm text-gray-600">Please receive a parking ticket from the attendant after parking your vehicle.</span></li>
                    <li>管理人は多言語に対応しておりません。こちらのサイト内でご確認ください。<br><span class="text-sm text-gray-600">The attendant does not speak multiple languages. Please check this site for information.</span></li>
                    <li>駐車券は大切に保管してください。<br><span class="text-sm text-gray-600">Please keep your parking ticket in a safe place.</span></li>
                    <li>駐車券に記載の入庫日時をこのページで入力すると、現在時の概算料金が確認できます。<br><span class="text-sm text-gray-600">You can check the current estimated fee by entering the entry date and time from your ticket on this page.</span></li>
                </ol>
            `;
        }
        if (exitProcessDiv) {
            exitProcessDiv.innerHTML = `
                <h3 class="text-xl font-bold mb-4 text-gray-800">出庫手順 / Exit Process</h3>
                <ol class="list-decimal list-inside space-y-3 text-gray-700">
                    <li>管理人に駐車券を渡し、料金をお支払いください（日本円・現金のみ）。<br><span class="text-sm text-gray-600">Please give your parking ticket to the attendant and pay the fee (Cash only, in JPY).</span></li>
                    <li>お客様の運転により車庫から後退で気を付けて出庫させてください。<br><span class="text-sm text-gray-600">Please carefully reverse your vehicle out of the parking space.</span></li>
                    <li>後方にある円形の回転盤までお進みください。<br><span class="text-sm text-gray-600">Proceed to the circular turntable located at the rear.</span></li>
                    <li>管理人が合図をするまでゆっくりと後退してください。<br><span class="text-sm text-gray-600">Please reverse slowly until the attendant gives you a signal.</span></li>
                    <li>管理人の合図で停車し、回転盤が回ります。停車の状態を保ってください。<br><span class="text-sm text-gray-600">Stop at the attendant's signal. The turntable will rotate. Please remain stationary.</span></li>
                    <li>回転停止の確認が出来たら、場内から出庫をしてください。歩行者の多い地域です、注意して公道に出てください。<br><span class="text-sm text-gray-600">After confirming the rotation has stopped, you may exit the parking lot. Please be cautious of pedestrians as you enter the public road.</span></li>
                </ol>
            `;
        }
        
        // Copyrightの年を動的に設定
        document.getElementById('copyright-year').textContent = new Date().getFullYear();
    };

    // --- フォーム送信イベント ---
    manualEntryForm.addEventListener('submit', (event) => {
        event.preventDefault(); // フォームのデフォルト送信をキャンセル
        
        const dateValue = manualDateInput.value;
        const timeValue = manualTimeInput.value;

        if (!dateValue || !timeValue) {
            alert("日付と時間を両方入力してください。\nPlease enter both date and time.");
            return;
        }

        const entryDateTime = new Date(`${dateValue}T${timeValue}`);
        
        if (isNaN(entryDateTime.getTime())) {
            alert("無効な日時です。正しく入力してください。\nInvalid date/time. Please enter correctly.");
            return;
        }

        calculateFeeFromDateTime(entryDateTime);
    });

    // --- 料金計算と情報表示 ---
    const isHoliday = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6; // 0: Sunday, 6: Saturday
    };

    const calculateFeeFromDateTime = (entryDate) => {
        try {
            const now = new Date();
            
            if (entryDate > now) {
                alert("入庫日時は現在時刻より前に設定してください。\nEntry time must be before the current time.");
                resetTicketInfo();
                return;
            }

            let totalFee = 0;
            let nightFeeAggregated = 0;
            const NIGHT_MAX_FEE = 1800;
            const ratePer15Min = isHoliday(entryDate) ? 200 : 300;
            let cursorDate = new Date(entryDate.getTime());

            // 15分ごとに料金を加算していくロジック
            while (cursorDate < now) {
                const cursorHour = cursorDate.getHours();
                const isNightTime = cursorHour >= 21 || cursorHour < 6;
                
                if (isNightTime) {
                    if (nightFeeAggregated < NIGHT_MAX_FEE) {
                        totalFee += ratePer15Min;
                        nightFeeAggregated += ratePer15Min;
                        if (nightFeeAggregated > NIGHT_MAX_FEE) {
                            totalFee -= (nightFeeAggregated - NIGHT_MAX_FEE);
                            nightFeeAggregated = NIGHT_MAX_FEE;
                        }
                    }
                } else {
                    totalFee += ratePer15Min;
                }
                
                const prevDate = new Date(cursorDate.getTime());
                cursorDate.setMinutes(cursorDate.getMinutes() + 15);

                // 日付が変わったら夜間最大料金をリセット
                if (cursorDate.getDate() !== prevDate.getDate()) {
                    nightFeeAggregated = 0;
                }
            }

            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            document.getElementById('entryDate').textContent = entryDate.toLocaleDateString('ja-JP', options);
            document.getElementById('entryTime').textContent = entryDate.toTimeString().substring(0, 5);
            document.getElementById('dayType').textContent = isHoliday(entryDate) ? '土日祝 / Weekend/Holiday' : '平日 / Weekday';
            document.getElementById('currentTime').textContent = now.toTimeString().substring(0, 5);
            document.getElementById('estimatedFee').textContent = `¥${totalFee.toLocaleString()}`;

        } catch (error) {
            console.error("Calculation failed:", error);
            resetTicketInfo();
            document.getElementById('estimatedFee').innerHTML = `計算エラー<br>Calculation Error`;
        }
    };

    const resetTicketInfo = () => {
        document.getElementById('entryDate').textContent = '----/--/--';
        document.getElementById('entryTime').textContent = '--:--';
        document.getElementById('dayType').textContent = '---';
        document.getElementById('currentTime').textContent = '--:--';
        document.getElementById('estimatedFee').textContent = '¥---';
    };

    // --- イベントリスナーのセットアップ ---
    // ▼▼▼ ここからが変更された部分 ▼▼▼
    // 日本語住所コピーのイベントリスナー
    if (copyAddressJaBtn) {
        copyAddressJaBtn.addEventListener('click', () => {
            const address = "〒107-0052 東京都港区赤坂2-15-18 西山興業赤坂ビル";
            navigator.clipboard.writeText(address).then(() => {
                copyFeedback.innerHTML = '日本語住所をコピーしました！<br>Copied Japanese address!';
                setTimeout(() => { copyFeedback.innerHTML = ''; }, 3000);
            }).catch(err => {
                console.error('Japanese address copy failed:', err);
                copyFeedback.innerHTML = 'コピーに失敗しました<br>Copy failed';
                setTimeout(() => { copyFeedback.innerHTML = ''; }, 3000);
            });
        });
    }

    // 英語住所コピーのイベントリスナー
    if (copyAddressEnBtn) {
        copyAddressEnBtn.addEventListener('click', () => {
            const address = "Nishiyama Kogyo Akasaka Bldg., 2-15-18 Akasaka, Minato-ku, Tokyo 107-0052, Japan";
            navigator.clipboard.writeText(address).then(() => {
                copyFeedback.innerHTML = '英語住所をコピーしました！<br>Copied English address!';
                setTimeout(() => { copyFeedback.innerHTML = ''; }, 3000);
            }).catch(err => {
                console.error('English address copy failed:', err);
                copyFeedback.innerHTML = 'コピーに失敗しました<br>Copy failed';
                setTimeout(() => { copyFeedback.innerHTML = ''; }, 3000);
            });
        });
    }
    // ▲▲▲ ここまでが変更された部分 ▲▲▲

    // --- ページの初期化を実行 ---
    initializePage();
});