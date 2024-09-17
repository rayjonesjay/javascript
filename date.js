/*
all about dates here
*/

// get current date and time
const now = new Date();
console.log(now.getDay())

// get specific date and time
const specificDate = new Date('2024-09-01T12:00:00')
console.log(specificDate)
const specificDate2 = new Date(2024,8,1,12,0,0) // when you use this technique 
// the months are 0 indexed so 0 means january 1 is february 11 is december
console.log(specificDate2)


// getting date from milliseconds
const datefrommillisec = new Date(17000000000)
console.log(datefrommillisec)

// getting date components
console.log("*********")
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
// console.log(seconds)

// setting date components

// date.setFullYear(2002)
// // date.setMonth(11)
// date.setDate(250);
// date.setHours(15)
// date.setMinutes(30)
// date.setSeconds(45)
// console.log(date.getDate())

// date comparison


// formatting dates

const l = date.toLocaleDateString('en-UK')
console.log(l)

let m  = 'helo';
let mm = m.padStart(100,'0')

let n = m;
let num  = 100;
console.log(n)

const diff = num - n.length
for (let i = 0; i < diff; i++){
    n = "0" + n
}
console.log(n==mm)

// date difference
const d1 = new Date('2023-01-01')
const d2 = new Date('2024-01-01')
// console.log(d1<d2)
// console.log(d1>d2)
const dif = Math.abs(d1-d2)
console.log(dif)
// convert milliseconds to days
const days = Math.ceil(dif/(1000*60*60*24))
console.log(days)