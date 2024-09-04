function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function dayOfTheYear(date) {
    // Ensure the date is a valid Date object
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error('Invalid Date');
    }

    // Extract the year, month, and day from the date
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-based index
    const day = date.getDate();

    // Array to store the number of days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap year
    if (isLeapYear(year)) {
        daysInMonth[1] = 29; // February has 29 days in a leap year
    }

    // Calculate the number of days up to the given month
    let daysUpToMonth = 0;
    for (let i = 0; i < month; i++) {
        daysUpToMonth += daysInMonth[i];
    }

    // Add the days in the current month
    const daysSinceStart = daysUpToMonth + day;

    return daysSinceStart;
}