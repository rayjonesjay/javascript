function indexOf(arr,val,optional=0){
  for (let i = optional; i < arr.length;i++){
    // if we find it
    if (arr[i] ===  val){
      return i
    }
  }
  // if val was never found
  return -1
}
function lastIndexOf(arr,val,optional=arr.length-1){
  for (let i = optional; i >= 0;i--){
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
// let t = "sd"
// arr =[t, 0, 0,0, t,0,0]
// val=t
//   let result = lastIndexOf(arr,val)
// console.log("found at index:",result)