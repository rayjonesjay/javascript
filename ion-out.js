function ionOut(s){
 // split the input string into words
  const words = s.split(/\s+/)

  const res = [];

  for(const word of words) {
    const regex = /t(?=ion)/;
    if (regex.test(word)){
        res.push(word.replace('ion', '').replace(/[^a-zA-Z]+$/, ''));
    }
  }
  return res
}
// console.log(ionOut("action motion station nation attention")); // [ 'act', 'mot', 'stat', 'nat', 'attent' ]
// console.log(ionOut("interaction friction tension")) // [ 'interact', 'frict', 'tens' ]
// console.log(ionOut("destination nation ionization")) // [ 'destinat', 'nat' ]
// console.log(ionOut("education caution pollution"))
// console.log(ionOut('attention, direction'))