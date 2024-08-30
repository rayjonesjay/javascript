function get(src,path){
  // split to get keys
  const keys =  path.split('.')
  let current = src;

  for(let key of keys){
    if(current[key] === undefined) {
      return undefined
    }
    current=current[key];
  }
  return current
}