/*
Create a function named forEach which takes an array as the first argument, a function as the second
argument and that works like the Array.prototype.forEach method.
 */
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i],i,array);
    }
}