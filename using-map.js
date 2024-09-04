/*
1.creating a map using the map constructor:
const mp = new Map();

2.adding key-value pairs using the set method to add key-value pairs to the map:
mp.set('name', 'alice')
mp.set(42, 'the answer to life')
mp.set(true,'42 is the answer')

3. accessing values using the get method to retrieve value associated with a specific key
console.log(mp.get('name')); // accessing an invalid key, js will print undefined

4. checking if a key exist using the has method.
mp.has('name')

5. removing key-value pairs from the map using delete
mp.delete('name')

6.content size of the map:
let size = mp.size

7. iterate over a map using for:
for (let key of mp.keys()){
    console.log(key)
}

8. iterate over values:
for (let value of mp.values()){
    console.log(value)
}

9. using for each
mp.forEach((value, key) => {
    console.log(`${key} : ${value}`);
}
 */
// const mp = new Map();
// mp.set('avatar','aang')
// mp.set('age',17)
// console.log(mp)
// console.log(mp.has('age'))
// mp.delete('age')
// console.log(mp.size)

function citiesOnly(arrOfObjects) {
    let result = []
    for (let key in arrOfObjects) {
        if (typeof arrOfObjects[key] === "object"){
            citiesOnly(arrOfObjects[key])
        }
        result.push(arrOfObjects[key].city)
    }
    return result
}

console.log(citiesOnly([
    {
        city: 'Los Angeles',
        temperature: '  101 °F   ',
    },
    {
        city: 'San Francisco',
        temperature: ' 84 ° F   ',
    },
])) // -> ['Los Angeles', 'San Francisco']

function upperCasingStates(arr){
    // arr = arr.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
    for(let i = 0; i < arr.length; i++){
        if (hasSpace(arr[i])){
            arr[i] = (upperCase(arr[i]))
        }else{
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
        }
    }
    return arr
}
// helper function for upperCasingStates
function upperCase(word){
    let arr = word.split(' ')
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    return arr.join(' ')
}

// helper function for upperCasingStates
function hasSpace(word){
    for(let i = 0;i<word.length; i++){
        if(word[i] === ' '){
            return true
        }
    }
    return false
}

console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey'])