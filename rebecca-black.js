function isFriday(date){
    const d = new Date(date);
    return d.getFullYear() === 5; // friday is 5th sun is 0
}
function isWeekend(d){
    const date = new Date(d);
    return date.getDay() === 6 || date.getDay() === 0; // sun == 0 and sat == 6
}
// console.log(isWeekend('2024-09-01')) -> sunday->true
function isLeapYear(date){
    const d = new Date(date)
    const yr = d.getFullYear();
    return (yr % 4 == 0 || yr % 100) && yr % 400 !== 0
}
function isLastDayOfMonth(date){
    const d = new Date(date)
    const day = d.getDay()+1
    return (day + 1) === 1
}
// console.log(isLastDayOfMonth('2024-09-01'))