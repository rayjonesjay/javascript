/*
map() -> method creates a new array by performing a function on each array element
map() -> method does not execute the function for array elements without values
map() -> method does not change the original array
 */
function mapKeys(obj,callback){
    let newO = {}
    for(let key of Object.keys(obj)){
        let res = callback(key);
        // console.log(">>>",res)
        newO[res] = obj[key] ;
    }
    return newO
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

function filterKeys(obj, callback){
    let newO = {}
    for(let key of Object.keys(obj)){
        if (callback(key)){
            newO[key] = obj[key]
        }
    }
    return newO
}
function reduceKeys(obj, callback, accumulator=undefined) {
    for (const [key, value] of Object.entries(obj)) {
        // Ignore non-object properties
        if (!obj.hasOwnProperty(key)) {
            continue
        }

        if (typeof accumulator === "undefined") {
            accumulator = key;
        } else {
            accumulator = callback(accumulator, key)
        }
    }

    return accumulator
}
// console.log("*****************")
// console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)))

// function filter(s){
//     let count = 0
//     for (let i = s.length - 1; i >= 0; i--){
//         let char = s.charAt(i);
//         if (isLetterOrNumber(char)){
//             count=i
//             break
//         }
//     }
//     return s.slice(0,count+1)
// }

function isLetterOrNumber(char) {
    // Check if the input is a single character
    if (typeof char !== 'string' || char.length !== 1) {
        return false; // Return false for invalid input
    }

    // Check if the character is a letter (lowercase or uppercase) or a number
    const isLetter = /^[a-zA-Z]$/.test(char); // Regex for letters
    const isNumber = /^[0-9]$/.test(char);    // Regex for numbers

    return isLetter || isNumber; // Return true if it's a letter or number
}


// console.log(isLetterOrNumber('A')); // true
// console.log(isLetterOrNumber('z')); // true
// console.log(isLetterOrNumber('5')); // true
// console.log(isLetterOrNumber('@')); // false
// console.log(isLetterOrNumber('1a')); // false (more than one character)
// console.log(isLetterOrNumber('')); // false (empty string)

// console.log(reduceKeys(nutrients,  (k) => `✔️${k}`))

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) => `${acc}${cr}:`, ':'))

// output: carbohydrates, protein, fat