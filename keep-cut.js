function cutFirst(str){
  let res = ""
  for (let i = 2; i < str.length;i++){
    res += str[i]
  }
  return res
}
function cutLast(str){
  let res = ""
  for(let i = (str.length-1)-2; i >= 0; i--){
    res += str[i]
  }
  return res.split('').reverse().join('')
}
function cutFirstLast(str){
  str = cutLast(str)
  str = cutFirst(str)
  return str
}
function keepFirst(str){
  let res = ""
  for(let i = 0; i < str.length;i++){
    if (i < 2){
      res += str[i]
    }else {
      break
    }
  }
  return res
}
function keepLast(str){
  let res = ""
  let counter = 0
  for(let i = str.length-1; i >= 0;i--){
    if (counter < 2){
      res += str[i]
    }else {
      break
    }
    counter += 1
  }
  return res.split('').reverse().join('')
}
function keepFirstLast(s){
  if(s.length<4){
    return s
  }
 return keepFirst(s) + keepLast(s)
}
// let s = "ab"
// console.log(cutFirst(s))
// console.log(cutLast(s));
// console.log(cutFirstLast(s))
// console.log(keepFirst(s))
// console.log(keepLast(s))
// console.log(keepFirstLast(s))