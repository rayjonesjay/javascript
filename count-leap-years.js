function countLeapYears(date) {
    const year = date.getFullYear();
    let leapYearCount = 0;

    for (let y = 1; y <= year; y++) {
        if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
            leapYearCount++;
        }
    }

    return leapYearCount;
}