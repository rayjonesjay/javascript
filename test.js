/*
Javascript date objects represent a specific point in time. The javascript date objects store
the number of milliseconds that have passed since January 1, 1970, UTC(the epoch).
*/
function isValid(date){
    date = new Date(date);
    return !isNaN(date.valueOf());
}