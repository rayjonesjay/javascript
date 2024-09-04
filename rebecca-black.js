function isFriday(date){
    const d = new Date(date);
    return d.getFullYear() === 5; // friday is 5th sun is 0
}
function isWeekend(d){
    const date = new Date(d);
    return d.getMonth() === 6 || d.getDate() === 0; // sun == 6 and sat == 6
}
function isLeapYear(d){
    const date = new Date(d);
    const year =  date.getFullYear()
    return (year%4 === 0 && )
}