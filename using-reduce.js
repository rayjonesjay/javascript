// YOU MUST USE reduce .
/*
adder: accepts an array of numbers, and returns the sum as a number.
sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element
is odd or even. Even = multiply. Odd = add.
funcExec: accepts an arrays of functions and executes them using reduce, returning the result.
 */

function adder(arrNum,optional=0){
   return arrNum.reduce((sum,num) => sum + num,optional)
}
const arr = [1,2,3,4]
console.log(adder([29, 23, 3, 2, 25], 135));

function sumOrMul(arr,optional=0){
    return arr.reduce((acc, num) => {
        if(num%2===0){
            return acc * num;
        }else{
            return acc + num;
        }
    },optional);
}
console.log(sumOrMul([29, 23, 3, 2, 25], 135))

function funcExec(arrOfFunc,optional){
    return arrOfFunc.reduce((val,func) => func(val), optional);
}

const addOne = x => x+1;
const double = x => x * 2;
const subThree = x => x - 3
const arrFuncs = [subThree,double,addOne]
console.log(typeof addOne)
console.log(subThree(5))