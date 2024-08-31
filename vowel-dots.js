let vowels = /[aeiou]/gi;
function vowelDots(str){
  let res = "";
  res = str.replace(vowels, (match) => match + ".")
  return res
}
// console.log(vowelDots("This is a new thing"))