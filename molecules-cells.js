function RNA(dna){
  const strand = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U',
  }
  let res = ""
  for(let i = 0; i < dna.length;i++){
    res += strand[dna[i]]
  }
  return res
}
function DNA(rna){
  const strand = {
    'C':'G',
    'G':'C',
    'A':'T',
    'U':'A',
  }
  let res = ""
  for(let i = 0; i < rna.length;i++){
    res += strand[rna[i]]
  }
  return res
}
// console.log(DNA("AUCG"))
// console.log(RNA("TAGC"))