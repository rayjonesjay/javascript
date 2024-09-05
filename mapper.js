/*
function that takes an array as the first argument, a function as a second, and that works
like the method .map
 */
function map(arr,func){
    let res = []
    for(let i = 0 ; i < arr.length ; i++){
        let mappy = func(arr[i],i,arr) // map returns a new array
        // if(Array.isArray(mappy)){
        //     res.push([...mappy])
        // }else{
        //     res.push(mappy)
        // }
        res.push(mappy)
    }

    return res
}
function flatMap(arr,callback){
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        let mappedVal = callback(arr[i],i,arr)
        if(Array.isArray(mappedVal)){
            result.push(...mappedVal)
        }else{
             result.push(mappedVal)
        }
    }
    return result
}