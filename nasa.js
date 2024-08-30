function nasa(N){
  let res = ""
  for(let i = 1; i <= N; i++){
    if(i !== N){
      res += String(i) + " "
    }else{
      res += String(i)
    }
  }
  return res
}

// console.log(nasa(10))