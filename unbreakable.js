function split(str, sep) {
  let res = []
  if (sep.length===0){
    for(let i = 0; i < str.length; i++){
      if(str[i].length === 0){
        continue
      }
      res.push(str[i])
    }
    return res
  }
  let t = ""
  let i = 0
  while (i < str.length) {
    // check if the current substring matches the separator
    if (str.slice(i, i + sep.length) === sep) {
      // if (t !== "") {
        res.push(t)
        t = "" // reset
      // }
      i = i + sep.length // move the i pointer to the end of sep
    } else {
      t += str[i];//accumulate
      i++;
    }


    // i++
    // i++ //-> you can also accumulate from here
  }
  // take care of the last round
  // if (t !== "") {
  res.push(t)
  // t = ""
  // }
  return res
}

function join(arr, bridge) {
  let res = ""
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]
    if (i !== 0) {
      res += bridge
    }
    res += str
  }
  return res
}

// // let r = "hello world this , is my time to shine"
// let res = ["hello", "world", "this" , "is"]
// // console.log(res)
console.log(split('abc', ''))
console.log(split('Riad', ''))
// console.log(split('rrrr', 'rr'));