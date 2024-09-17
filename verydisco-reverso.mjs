/*
create a verydico-reverso.mjs script that:
1. takes the name of a file(with the extension) as first argument.
2. reads this file
3. deciphers the content of this file: by reversing it from the very disco mode
4. prints the result in the console
 */

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
function decipher(word){
    // verydisco -> discovery
    const len = word.length;
    const trimIndex = Math.floor(len/2);
    const before = word.slice(0,trimIndex);
    const after = word.slice(trimIndex);
    return after+before;
}
// console.log(decipher('verydisco'))
// console.log("**********")
async function main() {
    // Get the file path from the command-line arguments
    const arg = process.argv.slice(2);
    if (arg.length === 0) {
        console.error("Error: Please provide the name of the file as an argument.");
        process.exit(1);
    }

    const path = resolve(arg[0]);  // Resolve the file path from the provided argument

    try {
        // Read the file content asynchronously
        const data = await readFile(path, 'utf-8');

        // Split the content by space (or however your file content is formatted)
        let words = data.split(/\s+/); // Splitting by any whitespace characters
        let res = [];

        // Decipher each word in the file content
        for (let word of words) {
            res.push(decipher(word));
        }

        // Return the deciphered content joined back into a string
        return res.join(' ');
    } catch (err) {
        // Catch any errors during file reading
        console.error("Error reading file:", err);
        process.exit(1);
    }
}
main().then(result => {
    console.log(result);  // Logs the final string after the Promise resolves
}).catch(err => {
    console.error(err);   // Catches any errors that might have occurred
});
