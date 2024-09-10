/*
What is currying in javascript?
Currying in js is a technique where a function, instead of taking all of its arguments at once,
it takes them one at a time. Each time it receives an argument, it returns a new function that takes the
argument...and so on until all arguments have been provided.

**********************************************************
Objective:
Create defaultCurry()(), which curries two objects.
Function signature: defaultCurry(a)(b) where a is the first object and b is the second object

defaultCurry merges the objects together.
If the key exist in both objects->the value from the second object will override the value from the first
object
 */
function defaultCurry(a){
    return function(b){
        // create a new object to store our final result
        const newO = {}
        // loop through the keys of b object
        for(let k of Object.keys(b)){
            // check if a key in object 'a' exist in 'b'
            // if it exists then value of 'b' with same key/name
            // will override the value from a(which is the first object passed as argument)
            if(a[k]){
                newO[k] = b[k];
            }else{
                // if a does not have the same key as b , just add b and its values to the newO object
                newO[k] = b[k];
            }
        }
        // add a and its values to the object
        for(let k of Object.keys(a)){
            if(!newO[k]){ // add only those that have not been added to the object
                newO[k] = a[k];
            }
        }
        return newO
    }
}
/*
console.log(defaultCurry({
    http: 403,
    connection: 'close',
    contentType: 'multipart/form-data',
})({
    http: 200,
    connection: 'open',
    requestMethod: 'GET'
}));
/* output
{
    http: 200,
    connection: 'open',
    contentType: 'multipart/form-data',
    requestMethod: 'GET'
}
*/
//************************************************************************
function mapCurry(func){
    return function(obj){
        const newO = {}
        for(let [k,v] of Object.entries(obj)){
            let [nk,nv] = func([k,v])
            newO[nk] = nv
        }
        return newO
    }
}
//**************************************************************************
function reduceCurry(func){
    return function(obj,acc){
        if(typeof acc === 'undefined'){ // if acc is not provided
            acc = 0
        }
        for(let [k,v] of Object.entries(obj)){
            acc =  func(acc, [k,v])
        }
        return acc
    }
}
/******************************************/
function filterCurry(func){
    return function(ob){
        const newO  = {}
        for(let [k,v] of Object.entries(ob)){
            if(func([k,v])){
                newO[k] = v
            }
        }
        return newO
    }
}
/*****************************************/
function reduceScore(person,acc){
    if(typeof acc === 'undefined'){
        acc = 0 // if acc is provided
    }
    for(let [k,v] of Object.entries(person)){
        if(v.isForceUser){
            acc += v.shootingScore + v.pilotingScore
            // console.log(k,'->',v.isForceUser)
        }
    }
    return acc
}
/*******************************************/
function filterForce(person){
    let newO = {}
    for(let [k,v] of Object.entries(person)){
        if(v.isForceUser){
            if(v.shootingScore >= 80){
                newO[k] = v
            }
        }
    }
    return newO
}
/*********************************************/
// -> new object where the property average == (plottingScore+shootingScore)/2
function mapAverage(person){
    const newO = {};
    for(let [k,v] of Object.entries(person)){
        let avg = (v.shootingScore + v.pilotingScore) / 2
        newO[k] = { ...v, averageScore: avg }
    }
    return newO;
}

// // const personnel = {
// //     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
// //     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
// //     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
// //     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
// //     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }
// // console.log(mapAverage(personnel))

/*
// console.log(filterForce(personnel))
console.log(reduceStore(personnel))
console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))
const res = reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0)
console.log(res)
const result = filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
    str: 'string',
    nbr: 1,
    arr: [1, 2],
})
console.log(result)
*/