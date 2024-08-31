function pyramid(str,num){
  let res = ""

  for(let i = 1; i <= num; i++){
    let spaceCount = (num-i);
    let spaces = " ".repeat(spaceCount).repeat(str.length);
    // create the current row with the string repeated i times
    let chars = str.repeat(2*i-1)
    let row = spaces + chars
    // console.log(chars)
    res += row;
    if (i !== num){
      res += "\n";
    }
  }
  return res
}
let res = pyramid("*",5)
res = console.log(pyramid('*', 5))
console.log(res)