function nasa(N){
  let res = ""
  for(let i = 1; i <= N; i++){
    if(i % 3 === 0 && i % 5 ===0) {
      res += "NASA"
    }else if(i % 3 === 0){
      res += "NA"
    }else if(i % 5 === 0){
      res += "SA"
    }else {
      res += String(i)
    }
    if(i !== N){
      res += " "
    }
  }
  // console.log(res.split(''))
  return res
}

// console.log(nasa(15))