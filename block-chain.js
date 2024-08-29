// blockChain receives two arguments, data and prev which if not provided will use the genesis block
function blockChain(data, prev = {index:0,hash:'0'}){
  // new block gets new index
  const index = prev.index+1;

  // compute the hash using the provided function
  const hash = hashCode(index + prev.hash + JSON.stringify(data));

  // create the new block
  const newBlock = {
    index: index,
    hash: hash,
    data: data,
    prev: prev,
    chain: function(newData)  {
      return blockChain(newBlock,this);
    }
  }
  return newBlock
}