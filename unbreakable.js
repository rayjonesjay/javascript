function split(str){
  let res = []
  let t = ""
  for (let i = 0; i < str.length; i++){
    if (str[i] !== ' '){
      t += String(str[i])
    }else {
      if (t !== ""){
        res.push(t)
        t = ""
      }
    }
  }
  if (t !== ""){
    res.push(t)
    t = ""
  }
  return res
}

function join(arr){
  let res = ""
  for(let i = 0; i < arr.length;i++){
    if(i < arr.length){
      res += arr[i] + " "
    }else {
      res += arr[i]
    }
  }
  return res
}
// let r = "hello world this is my time to shine"
// let res = split(r)
// console.log(res)
// console.log(join(res))