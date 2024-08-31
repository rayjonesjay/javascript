function letterSpaceNumber(str){
  let pattern = /[a-zA-Z]\s\d(?![a-zA-Z]|[0-9])/g;
  const matches = str.match(pattern)
  // console.log(matches);
  return matches || []
}
// console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))