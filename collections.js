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
  return Object.entries(obj)
}
function objToMap(obj){
  return new Map(Object.entries(obj))
}
function arrToObj(arr){
  return Object.assign({}, arr)
}
// const m = new Map();
// m.set('he','lo')
// console.log(mapToObj(m))
// console.log(setToArr([1,3,4,4]));
// console.log(arrToStr([1,2,3]))

