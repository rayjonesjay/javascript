import {resolve} from 'node:path';
import {readdir} from 'node:fs/promises'

/*
You're very fav person's birthday is coming soon. So you have decided to organize a very special
party.

Invitations have been sent for a while.
Good news: answers are back, but they were not counted. But saved every one of them as a file
in a special directory.

Create tell-me-how-many.mjs script that:
1. takes a relative or absolute directory path as an argument from the command line.
2. read this directory path
3. get the number of entries in this directory
4. print result in console ---> console.log()
 */

async function main() {
    let dir = '.'
    const args = process.argv.slice(2)
    // console.log(args)
    if (args.length !== 0) {
        dir = args[0]
    }

    // console.log(dir)
    // read from dir
    const path = resolve(dir)
    // if(path.)

        const files = await readdir(path)
        // console.log("******************************")
    // console.log(n)
        return Number(files.length)

    // console.log(path)
}
main().then(r => console.log(Number(r)))

