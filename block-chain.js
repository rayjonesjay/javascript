// const hashCode = str =>
//   (
//     [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
//   ).toString(36)
/*
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
*/
function blockChain(data, prev = { index: 0, hash: '0' }) {
  const block = {
    index: prev.index + 1,
    data: data,
    prev: prev,
    hash: hashCode(`${prev.index + 1}${prev.hash}${JSON.stringify(data)}`),
    chain: function (newData) {
      return blockChain(newData, this);
    },
  };

  return block;
}
const first = blockChain({ a: 1 })
console.log(first.index) //           -> 1
console.log(first.data) //            -> { a: 1 }
console.log(first.prev) //            -> { index: 0, hash: "0" }
console.log(first.hash) //            -> '1103f27'
console.log(hashCode('10{"a":1}')) // -> '1103f27'

const second = first.chain({ hello: 'world' })
console.log(second.hash) //                           -> '18drvvc'
console.log(hashCode('21103f27{"hello":"world"}')) // -> '18drvvc'

const chain = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

const fork = second
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

console.log(chain.hash) //  -> '1qr3qfs'
console.log(fork.hash) //   -> '1x9gsc1'
console.log(chain.index) // -> 5
console.log(fork.index) //  -> 5

