function sameAmount(s, a, b) {
  const regexA = new RegExp(a.source, 'g');
  const regexB = new RegExp(b.source, 'g');

  const matchesA = [...s.matchAll(regexA)].length;
  const matchesB = [...s.matchAll(regexB)].length;

  return matchesA === matchesB;
}
// console.log(sameAmount("abab", /a/, /b/)); // true
// console.log(sameAmount("ababab", /a/, /b/)); // true
// console.log(sameAmount("ababa", /a/, /b/)); // false
// console.log(sameAmount("abxyz", /a/, /b/)); // true
// const s = "hello world 123"
// const a = /[a-z]\s[0-9]/g;
// const b = /o\sw/g;
// console.log(sameAmount(s,a,b))