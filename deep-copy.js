/*
Create a function deepCopy that copies objects and arrays recursively
KeyWords:
1. Objects
2. Arrays
3. Copy
4. Recursively
*/

// deepCopy copies arrays or objects recursively
function deepCopy(input){
    if(Array.isArray(input)){
        const result = [];
        for(let i = 0; i < input.length; i++){
            if(Array.isArray(input[i])){
                result[i] = deepCopy(input[i])
            }else{
                result[i] = input[i]
            }
        }
        return result;
    }else if(typeof input === 'object' && input !== null) {
        const result = {}
        for (let k in input) {
            if (input.hasOwnProperty(k)) {
                result[k] = deepCopy(input[k])
            }
        }
        return result
    } else{
        return input
    }
}

// const input = [1,2,3,[4,6]]
// console.log(deepCopy(input))
// const obj = {
//     name: "john",
//     age : 30,
//     schools: { primary: "st paul" , secondary : "achievers"},
// }
// console.log(deepCopy(obj))