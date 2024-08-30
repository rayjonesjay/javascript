function RNA(dna){
  const strand = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'T',
  }
  let res = ""
  for(let i = 0; i < dna.length;i++){
    res += strand[dna[i]]
  }
  return res
}
console.log(RNA("ATCG"))