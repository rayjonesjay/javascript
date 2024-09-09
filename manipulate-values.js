/*
You have a grocery cart with some items you need. The item's name is the key, and the value will
represent nutrition facts per 100grams.

filterValues() -> works like .filter array method
mapValues() -> works like .map array method
reduceValues -> works like .reduce array method

filter() -> takes 3 arguments:
1. the item value
2. the item index(position)
3. the array itself (ours will take an object)
 */
function filterValues(obj,callback){
    let newO = {}
    // console.log(obj)
    for(let key of Object.keys(obj)){
        let ok = callback(obj[key]);
        // console.log(ok,obj[key],key)
        if (ok){
            newO[key] = obj[key];
        }
    }
    return newO
}
/*
map() method creates a new array by performing a function on each array element.
map() method does not execute the function for array elements
map() method does not change the original array
 */
function mapValues(obj,callback){
    let newO = {}
    for(let key of Object.keys(obj)){
        newO[key] = callback(obj[key]);
    }
    return newO
}

/*
reduce() method runs a function on each array elements to produce / reduce it to a single value
reduce() method works from left-to-right in the array
reduce() does not reduce the original array
 */
function reduceValues(obj,callback,optional){
    //make a copy since it does not reduce the original array
    let copy = obj
    let result = 0
    if (optional){
        result = optional
    }
    for(let key of Object.keys(copy)){
            result = callback(result,copy[key]);
    }
    return result
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// const nutrients = { a: 1, b: 2, c: 3 }

// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

// console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr, 3))
// output: 37