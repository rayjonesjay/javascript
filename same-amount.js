function sameAmount(s,a,b){
  return s.matchAll(a).length === s.matchAll(b).length
}
// const s = "hello world 123"
// const a = /[a-z]\s[0-9]/g;
// const b = /o\sw/g;
// console.log(sameAmount(s,a,b))