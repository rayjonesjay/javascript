function vowelDots(str){
  const pattern = /[aeiou]/gi
  return str.replace(pattern, (match) => match+".")
}
console.log(vowelDots('a'))