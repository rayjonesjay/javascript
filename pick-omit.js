function pick(obj,str){
    // step 1: convert the string to array of strings
    if (!Array.isArray(str)) {
        str = str.split(' ') // ensure str is an array
    }
    let newObj = {}
        for (let key of Object.keys(obj)){ // loop through the keys
            if(str.includes(key)){ // check if the key is present in str array
                newObj[key] = obj[key] // add the key and its value to the array
            }
        }
    return newObj
}

function omit(obj,str){
    if (!Array.isArray(str)) {
        str = str.split(' ')
    }
    let newObj = {}
        for (let key of Object.keys(obj)){
            if(!str.includes(key)){
                newObj[key] = obj[key]
            }
    }
    return newObj
}

const obj = { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita'}
const str  = ['griders','saws']
console.log(omit(obj,str))