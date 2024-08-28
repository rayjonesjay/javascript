function divide(a,b){
  let res = 0
  if (b===0){
    throw new Error("Error Division by zero")
  }
  const isNeg = (a < 0 && b >0) || (a > 0&&b <0)
  a = Math.abs(a)
  b = Math.abs(b)
  while(a >= b){
    res++
    a = a - b
  }
  return isNeg ? -res: res
}
function multiply(a,b){
  let res = 0
  let isNeg = false
  if (b < 0){
    isNeg = true
    b = -b
  }
  for (let i = 0; i < b; i++){
    res += a
  }
  return isNeg ? -res : res
}
function modulo(a,b){
  if (b===0){
    throw new Error("Error Division by zero")
  }
  let isNeg = a < 0;
  a = Math.abs(a)
  b = Math.abs(b)
  while(a>=b){
    a = a - b
  }
  return isNeg ? -a : a
}
