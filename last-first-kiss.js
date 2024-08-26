function first(arrString){
    return arrString[0];
}
function last(arrString){
    return arrString[arrString.length-1];
}
function kiss(arrString){
    let firstElement = first(arrString);
    let lastElement = last(arrString);
    return [firstElement, lastElement] ;
}
