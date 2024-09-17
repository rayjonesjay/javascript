/*
create a verydisco.mjs script that:
1. takes the 1 argument from the command line after the program name(argv0)
2.makes it very disco:
    * cut each word from this argument in 2 (rounded up)
    * re-compose a word by concatenating the chunks in the other order.
3.write the result in a file called verydicso-forever.txt
 */
import { writeFile } from 'node:fs/promises'
function main(){
    // slice from 1 up to end, ignoring the program name and node
    const args = process.argv.slice(2)
    // console.log(args)

    // split the words
    const words = args[0].split(' ')
    // console.log(words)

    let arr = []
    for(let word of words){
        arr.push(disco(word))
    }
    return arr.join(' ')
}

function disco(word) {
    // get the length of the word
    const len = word.length;
    const splitIndex = Math.ceil(len/2)
    const before = word.slice(0,splitIndex)
    const after = word.slice(splitIndex)
    return after+before
}
const result =  main()
writeFile('verydisco-forever.txt', result, (err) => {if (err) throw(err);})