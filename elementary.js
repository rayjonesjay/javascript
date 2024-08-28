function divide(a,b){
  let res = 0
  while(a >= b){
    res++
    a = a - b
  }
  return res
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
  let isNeg = a < 0
  a = Math.abs(a)
  b = Math.abs(b)
  while(a>=b){
    a = a - b
  }
  if (isNeg) {
    a = -a
  }
  return a
}
