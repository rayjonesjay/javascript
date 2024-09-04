function countLeapYears(date) {
    const year = date.getFullYear();

    // Correct the year to be the year before the given year
    const correctedYear = year - 1;

    // Count number of leap years
    const countDiv4 = Math.floor(correctedYear / 4);
    const countDiv100 = Math.floor(correctedYear / 100);
    const countDiv400 = Math.floor(correctedYear / 400);

    return countDiv4 - countDiv100 + countDiv400;
}

// Example usage:
console.log(countLeapYears(new Date('1664-08-09'))); // 403
