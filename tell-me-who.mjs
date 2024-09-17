/*
Create a tell-me-who.mjs script that takes your directory path as an argument and print the
names of all the guests in the console.
The output must print one guest per line, in ascending alphabetical order, and formatted as
Number. LastName FirstName *starting from 1*

 */
// Alice_John.json -> Alice John
import {readdir} from 'node:fs/promises'
import {resolve} from 'node:path'

function splitName(str) {
	return str.slice(0, -5).split('_')
}
async function read(){
	let dir = '.'
	const args = process.argv.slice(2)

	if(args.length !== 0){
		 dir = args[0]
	}
	let path = resolve(dir)
	let files = await readdir(path);

	let newData = [];
	for(let jsonName of files){
		let n = splitName(jsonName)
		newData.push(n[1] + ' ' + n[0])
	}

	let count = 1;
	newData.sort()
	for(let name of newData) {
		let format = `${count}. ${name}`
		console.log(format)
		count++
	}
}

read().then().catch(err => console.log(err))
