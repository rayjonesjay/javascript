function vowelDots(str){
  const pattern = /[aeiou]/gi
  let res = "";
  res = str.replace(pattern, (match) => match + ".")
  return res
}
console.log(vowelDots('c'))