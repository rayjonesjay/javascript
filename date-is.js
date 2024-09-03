// isValid accepts a Date, and returns false if Date is valid
function isValid(date){
    if (typeof(date) == "string"){
        return false
    }
    const d = new Date(date);
    return !isNaN(d.valueOf());
}

// isAfter accepts two date arguments and returns true if the first date is greater than the second
function isAfter(d1,d2){
    const date1 = new Date(d1)
    const date2 = new Date(d2)
    return (date1-date2)>0
}

function isBefore(d1,d2){
    const date1 = new Date(d1)
    const date2 = new Date(d2)
    return (date1-date2)<0
}

function isFuture(d){
    const date = new Date(d);
    return (!isNaN(date.valueOf()) && (date.valueOf() > Date.now()))
}

function isPast(d){
    if (typeof(d) == "string"){
        return false
    }
    const past = new Date(d);
    return isValid(d) && past.valueOf() < Date.now()
}
console.log(isPast(new Date(Date.now() + 1)))