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
function superTypeOf(u) {
  if (u === null) {
    return "null";
  } else if (typeof u === "undefined") {
    return "undefined";
  } else if (typeof u === "string") {
    return "String";
  } else if (typeof u === "number") {
    return "Number";
  } else if (typeof u === "function") {
    return "Function";
  } else if (Array.isArray(u)) {
    return "Array";
  } else if (u instanceof Map) {
    return "Map";
  } else if (u instanceof Set) {
    return "Set";
  } else if (typeof u === "object") {
    return "Object";
  }
  // Default case
  return "Object";
}
