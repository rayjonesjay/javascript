function indexOf(arr,val,optional=0){
  let startIndex = 0
  if (optional !== 0) {
    startIndex = optional
  }
  for (let i = startIndex; i < arr.length;i++){
    // if we find it
    if (arr[i] ===  val){
      return i
    }
  }
  // if val was never found
  return -1
}
function lastIndexOf(arr,val,optional=arr.length-1){
  let startIndex = arr.length-1
  if (optional !== arr.length-1) {
    startIndex = optional
  }
  for (let i = arr.length-1; i >= 0;i--){
    // if we find it
    if (arr[i] === val){
      return i
    }
  }
  // if val was never found
  return -1
}
function includes(arr,val){
  for (let i = 0; i < arr.length; i++){
    if(arr[i]===val){
      return true
    }
  }
  return false
}
// let arr = [1,3,1,3,5,1,1,6,4]
// let val = 50
// let result = includes(arr,val)
// console.log("found at index:",result)