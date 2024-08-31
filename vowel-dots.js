function vowelDots(str){
  const vowels = /[aeiou]/gi
  let res = "";
  res = str.replace(vowels, (match) => match + ".")
  return res
}
console.log(vowelDots('c'))