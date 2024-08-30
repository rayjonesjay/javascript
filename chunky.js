function chunk(arr,size){
  let res = []
  for(let i = 0; i < arr.length;i+=size){
    let chunk = i + size
    if (chunk > arr.length){
      chunk = arr.length
    }
    res.push(arr.slice(i,i+size))
  }
  return res
}
// let arr = [1,2,3,4,5,6,7,8,9]
// let size = 4
// let result = chunk(arr,size)
// console.log(result)