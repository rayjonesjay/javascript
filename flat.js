function flat(arr, depth=1){
  if (depth < 1) return arr;

  let res = []

  for(let i = 0; i < arr.length;i++){

    const elem = arr[i]

    if(Array.isArray(elem) && depth > 0){

      res = res.concat(flat(elem,depth-1))

    }else{

      res.push(elem)

    }

  }

  return res
}