/*
Merge two objects into a new object depending on the values type
function: Object ---merge---> New Object
condition:
 */
function fusion(...objects){
    let newObj = {};

    // iterate through each object
    for(let ob of objects){
        for(let k of Object.keys(ob)){
            if (typeof ob[k] === 'object' && !Array.isArray(ob[k])){
                if(typeof ob[k] === 'object'){
                    if(newObj[k] && typeof newObj[k] === 'object') {
                        //recursive merge
                        newObj[k] = fusion(newObj[k], ob[k])
                    }
                    // }else{
                    //     newObj[k] = fusion(ob[k])
                    // }
                }
            }
            // check if the value is of type array, ob[k] will yield an array
            if (Array.isArray(ob[k])) {
                if(newObj[k]){
                    newObj[k] = newObj[k].concat(ob[k])
                }else{
                    newObj[k] = ob[k]
                }
            }

            // check if the value is of type string ob[k] will yield a string
            if(typeof ob[k] === 'string'){
                if(newObj[k]){
                    newObj[k]  = newObj[k] + " " + ob[k] // concat them with space
                }else{
                    newObj[k] = ob[k] // add the key and its value to newObj if it does not exist
                }
            }

            if (typeof ob[k] === 'number'){
                if(newObj[k]){// if the key exist
                    newObj[k] += ob[k] // add them
                }else{
                    newObj[k] = ob[k] // add the key and value to newObj if it does not exist
                }
            }

            // in case of type mismatch
            if(typeof ob[k] !== typeof newObj[k]){
                newObj[k] = ob[k]
            }
        }
    }

    return newObj
}


// console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // -> { arr: [ 1, '2', 2 ] }
// console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
// console.log(fusion({ str: "salem" }, { str: "alem" })); // -> { str: 'salem alem' }
// console.log(fusion({ str: "salem" }, { str: "" })); // -> { str: 'salem ' })
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); // -> { a: 20, b: 10, c: 1 })
// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
// fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } })