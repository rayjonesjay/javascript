function flow(arr){
    return function(...args){
        let result = arr[0](...args)
        for(let i = 1; i < arr.length; i++){
            result = arr[i](result)
        }
        return result;
    };
}
//
// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2
//
// const flowedFunctions = flow([add2Numbers, square])
// flowedFunctions(2, 3) // -> 25