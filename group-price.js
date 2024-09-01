const reg =  /([^\d\s]+)(\d+)\.(\d+)/g;
function groupPrice(str){
let  match;
const res = []
while((match = reg.exec(str)) !== null){
  console.log(match[0])
  console.log(match[1])
  console.log(match[2])
  console.log(match[3])
  res.push([match[0],match[2],match[3]])
}
return res
}
const str = 'The price of the cereals is $4.00.'
console.log(groupPrice(str))