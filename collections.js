function arrToSet(arr){
    return new Set(arr);
}
function arrToStr(arr){
    return arr.join('')
}
function setToArr(sett){
    return Array.from(sett)
}
function setToStr(sett){
  return Array.from(sett).join('')
}
function strToArr(arr){
  return arr.split('')
}
function strToSet(str){
  // first convert string to array
  // convert array to set
  return new Set(str.split(''))
}
//  Object.fromEntries() converts an iterable
function mapToObj(mp){
  return Object.fromEntries(mp)
}
function objToArr(obj){
  let arr = []
  for(let key in obj){
    arr.push(obj[key])
  }
  return arr
}
function objToMap(obj){
  return new Map(Object.entries(obj))
}
function arrToObj(arr){
  return Object.assign({}, arr)
}
// string to object
function strToObj(str){
  return Object.assign({},str)
}
function superTypeOf(u) {
  if (u !== null && typeof u == "object" && !Array.isArray(u)){
    return "Object"
  }
  if (typeof u == 'string') {
    return "String"
  } else if (typeof u == 'number')
    return "Number"
  else if (Array.isArray(u)){
    return "Array"
  }else if (u instanceof Map){
    return "Map"
  }else if (u instanceof Set){
    return "Set"
  }else if (typeof u == "function"){
    return "Function"
  }else if (typeof  u == "undefined"){
    return "undefined"
  }else if (u===null){
    return "null"
  }
  return "Object"
}
// function superTypeOf()
// const m = new Map();
// m.set('he','lo')
// console.log(mapToObj(m))
// console.log(setToArr([1,3,4,4]));
// console.log(arrToStr([1,2,3]))

// const str = 'hello'
// const arr = [1, 2, 1, 3]
// const obj = { x: 45, y: 75, radius: 24 }
// const set = new Set()
// const map = new Map()
// set.add(1)
// set.add(2)
// set.add(1)
// set.add(3)
// map.set('a', 1)
// map.set('b', 2)
// map.set(3, 'c')
// map.set(4, 'd')

// console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
// console.log(arrToStr(arr)) // -> '1213'
// console.log(setToArr(set)) // -> [1, 2, 3]
// console.log(setToStr(set)) // -> '123'
// console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
// console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
// console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
// console.log(objToArr(obj)) // -> [45, 75, 24]
// console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
// console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
// console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
// console.log("****************")
// console.log(superTypeOf(map)) //         -> 'Map'
// console.log(superTypeOf(set)) //         -> 'Set'
// console.log(superTypeOf(obj)) //         -> 'Object'
// console.log(superTypeOf(str)) //         -> 'String'
// console.log(superTypeOf(666)) //         -> 'Number'
// console.log(superTypeOf(NaN)) //         -> 'Number'
// console.log(superTypeOf(arr)) //         -> 'Array'
// console.log(superTypeOf(null)) //        -> 'null'
// console.log(superTypeOf(undefined)) //   -> 'undefined'
// console.log(superTypeOf(superTypeOf)) // -> 'Function'