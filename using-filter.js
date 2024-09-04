/*
accepts an array of strings, and only returns those strings which contain less than 7
characters.
 */
function filterShortStateName(arrOfStr){
    return (arrOfStr.filter((str) => str.length < 7 ))
}
const arr = ["hello", "iorld", "eestimated", "ainitsdsdsd"]
// console.log(filterShortStateName(arr))


/*
accepts an array of strings and returns only those that start with any vowel
 */
function filterStartVowel(arrStr){
    return arrStr.filter((str) => isVowel(str.charAt(0)))
}
/*
returns true if s is a vowel aeiou AEIOU
 */
function isVowel(s){
    return (s==='a' || s === 'e' || s==='i'||s==='o'||s==='u' || s==='A' || s === 'E' || s==='I'||s==='O'||s==='U')
}
// console.log(filterStartVowel(arr))

/*
accepts an array of strings and returns only those which contain at least 5 of any vowels
 */
function filter5Vowels(arrStr){
    return arrStr.filter((str) => atLeast5(str))
}
function atLeast5(s){
   let count = 0
   for(let c of s){
       if (isVowel(c)){
           count++
       }
   }
   return count>=5
}
// console.log(filter5Vowels(arr))

function filter1DistinctVowel(arrStr){
    return arrStr.filter((s) => distinctVowel(s))
}

function distinctVowel(s){
    const vowels = new Set()
    s = s.toLowerCase() // lowercase for uniformity
    for(let i = 0; i < s.length; i++){
        if(isVowel(s[i])){
            vowels.add(s[i])
        }
    }
    return vowels.size===1
}

// const testArray = ['Alabama', 'Apple', 'Orange', 'banana', 'Mango'];
// console.log(filter1DistinctVowel(testArray)); // ['Alabama', 'banana']
function multiFilter(arrObj){
    return arrObj.filter(obj => {
        let atLeast8 = obj['capital'].length >= 8
        let startWithVowel = isVowel((obj['name'].charAt(0)).toLowerCase());
        let tagOneVowel = containsVowel(obj['tag'].toLowerCase())
        let notSouth = obj['region'] !== 'South'
        return (atLeast8 && !startWithVowel && tagOneVowel && notSouth)
    })
}

function containsVowel(s){
    for(let c of s){
        if (isVowel(c)){
            return true
        }
    }
}
const array = [
    { capital: 'Providence',
        name: 'Rhode Island',
        region: 'Northeast',
       tag: 'RI'
},
// { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    // { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    // {
    //     tag: 'MO',
    //     name: 'AMissouri',
    //     capital: 'Jefferson City',
    //     region: 'Midwest',
    // },
    // {
    //     tag: 'PA',
    //     name: 'Pennsylvania',
    //     capital: 'Harrisburg',
    //     region: 'Northeast',
    // },
    // {
    //     tag: 'RI',
    //     name: 'Rhode Island',
    //     capital: 'Providence',
    //     region: 'Northeast',
    // },
]
// console.log(multiFilter(array))