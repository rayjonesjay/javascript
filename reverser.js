function reverse(str){
  if (typeof str == "string"){
    return arr(str.split('')).join('')
  }
  return arr(str)
}
function arr(array){
  let i = 0
  let j = array.length-1
  while (i < j) {
    let tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
    i++
    j--
  }
  return array
}
let str = "reverser"
// let larr = ["1" , 23, "am blessed", 0.1]
console.log(reverse(str))