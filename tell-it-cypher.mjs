/*
Create a tell-it-cypher.mjs script that:
1. Takes a file as an argument
2. Takes one of these keywords as second argument
    - encode -> convert your file to base64, then save the result in a cypher.txt file.
    - decode -> convert your file from base64, then save file in a result in a clear.txt file.
3. Could take a string as third argument and use it as the new file name.
Extension must be precised.
 */

import { readFile, writeFile} from 'node:fs/promises';
import { resolve } from 'node:path';

async function read(){
    const args = process.argv.slice(2)
    const file = args[0] || '.'
    const action = args[1] || ''
    const newFile = args[2] || ''


    let outputFile;
    const absPath = resolve(file)
    // read data from file
    const data = await readFile(absPath, 'utf-8')
    let result
    if (action === 'encode'){
        // convert the file to Base64
        result = Buffer.from(data).toString('base64')
        outputFile = 'cypher.txt'
    }else if (action === 'decode'){
        result = Buffer.from(data, 'base64').toString('utf-8');
        outputFile = 'clear.txt'
    }else{
        console.error("wrong")
        process.exit(1)
    }

    // write the result to the appropriate file
    if(newFile){
        outputFile = newFile
    }
    await writeFile(outputFile, result, 'utf-8');
}
read().then().catch(console.error);