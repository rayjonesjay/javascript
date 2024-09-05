/*
Create three functions, which each accept an array as an argument.

    longWords: returns true if every element of the array is a string with at least 5 characters.

    oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.

    noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.

 */
const arr =  ['fill', 'carbon', 'chart', 'glare', 'express']

function longWords(arr){
    return arr.every(word => word.length >= 5 && typeof word === 'string');
}
console.log(longWords(arr));

function oneLongWord(arr){
    return arr.some(word => word.length >= 10 && typeof word ==='string')
}

console.log(oneLongWord(arr))
function noLongWords(arr){
    return arr.every(word => word.length < 7 && typeof word === 'string');
}
console.log(noLongWords(arr));