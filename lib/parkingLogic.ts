
export const calculateFee = (entryDate: Date, exitDate: Date = new Date()): number => {
    // Logic ported from js/script.js

    if (entryDate > exitDate) {
        return 0; // Or handle error
    }

    let totalFee = 0;
    let nightFeeAggregated = 0;
    const NIGHT_MAX_FEE = 1800;

    // Clone entry date to use as cursor
    let cursorDate = new Date(entryDate.getTime());

    // Align cursor to next minute? The original script just starts iterating.
    // Original: cursorDate < now. cursorDate += 15min.
    // It effectively counts the *starts* of 15m intervals?
    // Let's look closer at script.js:
    // while (cursorDate < now) { ... cursorDate.setMinutes(cursorDate.getMinutes() + 15); }
    // Example: Enter 10:00. Now 10:20.
    // 1. cursor 10:00. < 10:20. fee += 300. cursor -> 10:15.
    // 2. cursor 10:15. < 10:20. fee += 300. cursor -> 10:30.
    // 3. cursor 10:30. > 10:20. Loop ends.
    // Total 600. Correct (2 chunks of 15m started).
    // Wait, 10:00 to 10:20 is 20 mins. 2 chunks?
    // 0-15 (300), 16-30 (300)? Yes.

    while (cursorDate < exitDate) {
        const isHoliday = (date: Date) => {
            const day = date.getDay();
            return day === 0 || day === 6; // Sunday or Saturday
        };

        const ratePer15Min = isHoliday(cursorDate) ? 200 : 300;
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

        // Reset night fee aggregation on date change
        // This replicates the behavior in script.js
        if (cursorDate.getDate() !== prevDate.getDate()) {
            nightFeeAggregated = 0;
        }
    }

    return totalFee;
};
