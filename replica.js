/*
Create a function 'replica' that allows you to deep assign the values of all properties
from one or more objects to a target object.
KeyWords:
1. deep assign
2. from one or more object to a target

********************************************
Data structures allow us to structure and organize multiple primitive data.

Object:
Objects are most common in JavaScript, it is the base to all other data structure.

They hold properties: a property is a (key and value) pair.

The key is a string, and we associate it with a value, like variables.

Objects are created using curly brackets {}.

To create a property use a colon ':'
The string on left is the key and the one on right is the value.
To create multiple properties, you separate them with comma ','.
*/
function isObject(obj) {
    return (
        obj &&
        typeof obj === "object" &&
        !Array.isArray(obj) &&
        !(obj instanceof RegExp)
    );
}
function replica(target, ...sources) {
    sources.forEach((source) => {
        if (isObject(source)) {
            Object.keys(source).forEach((key) => {
                if (isObject(source[key])) {
                    if (!isObject(target[key])) {
                        target[key] = {};
                    }
                    replica(target[key], source[key]);
                } else if (source[key] instanceof RegExp) {
                    Object.assign(target, { [key]: new RegExp(source[key]) });
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            });
        }
    });
    return target;
}
//
// function replica(target, ...sources) {
//     for (const source of sources) {
//         for (const key in source) {
//             if (source[key] !== null && typeof source[key] === 'object') {
//                 if (Array.isArray(source[key])) {
//                     target[key] = [...source[key]];
//                 } else if (source[key] instanceof Date) {
//                     target[key] = new Date(source[key].getTime());
//                 } else {
//                     target[key] = replica({}, source[key]);
//                 }
//             } else {
//                 target[key] = source[key];
//             }
//         }
//     }
//     return target;
// }
//
//
// // function replica(target,...sources){
// //     for(let source of sources){
// //         target = deepAssign(target,source);
// //     }
// //     return target
// // }
//
// function deepAssign(target,source){
//     // check if source is array
//     for(let k in source) {
//         if(source.hasOwnProperty(k)){ // if the key 'k' property belongs to the source
//             target[k] = (target[k] || []).concat(source[k]);
//             // check if source is object type
//         }else if(typeof source[k] === 'object' && source[k] !== null){
//             target[k] = deepAssign((target[k] || []), source[k]);
//             // if it's a primitive type just add it to target
//         }else{
//             target[k] = source[k];
//         }
//     }
//     return target
// }
