function slice(seq,start=0,optional=seq.length){
  // seq means sequence
  if (optional<start){
    return []
  }
  if(start < 0){
    start = seq.length + start
    if (start<0){
      start=0
    }
  }
  if (optional < 0){
    optional = seq.length + optional
    if (optional < 0){
      return []
    }
  }
  if (optional >= seq.length){
    optional = seq.length
  }
  let res = []
  for(let i=start; i<optional;i++){
    res.push(seq[i])
  }
  return res
}
// let str = ["hello","world","golang","division","mangoes"]
// console.log(slice(str,-23,43))
