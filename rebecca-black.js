function isFriday(date){
    const d = new Date(date);
    return d.getDay() === 5; // friday is 5th sun is 0
}
function isWeekend(date) {
    const d = new Date(date);
    const day = d.getDay();
    return day === 6 || day === 0; // 0 represents Sunday and 6 represents Saturday
}

// console.log(isWeekend('2024-09-01')) -> sunday->true
function isLeapYear(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
    const d = new Date(date);
    const testDate = new Date(d);
    testDate.setDate(testDate.getDate() + 1);
    return testDate.getDate() === 1; // If the next day is 1, then it's the last day of the month
}

// console.log(isLastDayOfMonth('2024-09-01'))
console.log(isFriday('2014-08-29'))