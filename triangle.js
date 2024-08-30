function triangle(str,num){
  let res = ""
  for(let i = 1; i <= num; i++){
    let tmp = ""
    for(let j = 0; j < i; j++){
      tmp += str
    }
    if(i < num){
      res += tmp + "\n"
    }else{
      res += tmp
    }
  }
  return res
}
// console.log(triangle("*",5))