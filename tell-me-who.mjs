/*
Create a tell-me-who.mjs script that takes your directory path as an argument and print the
names of all the guests in the console.
The output must print one guest per line, in ascending alphabetical order, and formatted as
Number. LastName FirstName *starting from 1*

 */
// Alice_John.json -> Alice John
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
function splitName(str) {
	let name = str.slice(0,-5).split('_')
	return name 
}

async function read(){
	let dir = '.'
	const args = process.argv.slice(2)

	if(args.length != 0){
		 dir = args[0]
	}
	let path = resolve(dir)
	let files = await readdir(path); // convert path to absolute

	// sort the names aphabetically
	// files = files.sort(greate)
	let newData = [];
	for(let jsonName of files){
		newData.push(splitName(jsonName))
	}

	let count = 1;
	newData = newData.sort()
	for(let name of newData) {
		let formattedName = name.sort(greate).join(' ')
		let format = `${count}. ${formattedName}`
		console.log(format)
		count++
	}
}

function greate(a,b){
	return a > b;
}

// console.log(read())
// console.log(splitName("Alice_Ab.json").sort(greate))

read().then()
