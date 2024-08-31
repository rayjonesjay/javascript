function letterSpaceNumber(str){
  let pattern = /[a-zA-Z]\s\d(?![a-zA-Z]|[0-9])/;
  const matches = str.match(pattern)
  // console.log(matches);
  return matches[0] || []
}
// console.log(letterSpaceNumber('example 1, example 20'))