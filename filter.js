function filter(array,func){
    let res = []
    for(let i=0;i<array.length;i++){
        if(func(array[i],i,array)){
            res.push(array[i]);
        }
    }
    return res
}
let numbers = [1, 2, 3, 4, 5];
const func = (n => n % 2 === 0)
function reject(collection, predicate){
    let res = []
    for(let i = 0 ; i < collection.length ; i++){
        if(!predicate(collection[i],i,collection)){
            res.push(collection[i]);
        }
    }
    return res
}
console.log(reject(numbers,func))



function partition(collection, condition) {
    let truthy = [];
    let falsy = [];

    for (let i = 0; i < collection.length; i++) {
        // Use collection[i] instead of numbers[i]
        if (condition(collection[i],i,collection)){
            truthy.push(collection[i]);
        } else {
            falsy.push(collection[i]);
        }
    }

    return [truthy, falsy];
}

