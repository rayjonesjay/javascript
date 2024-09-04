function citiesOnly(arrObj){
    return arrObj.map(obj => obj.city)
}
// console.log(citiesOnly([
//     {
//         city: 'Los Angeles',
//         temperature: '  101 °F   ',
//     },
//     {
//         city: 'San Francisco',
//         temperature: ' 84 ° F   ',
//     },
// ]))

function upperCasingStates(arrStr){
    return arrStr.map(arr =>
        arr.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
    )
}
// console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']

function fahrenheitToCelsius(arr){
    return arr.map(obj => {
        let fahrenheitStr = obj.slice(0,-2);
        let fahrenheitFloat = parseFloat(fahrenheitStr);
        let celsiusFloat = Math.floor((fahrenheitFloat - 32) * (5/9))
        return `${celsiusFloat}°C`
    });
}

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']

function trimTemp(arrObj){
    return arrObj.map(obj => {
        obj['temperature'] = obj['temperature'].replace(/\s+/g, '')
        return obj
    });
}
//
// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]))
function tempForecasts(arrObj){
    let res = []
    return arrObj.map(obj => {
        // remove spaces and convert to Celsius
        let n = parseFloat((obj['temperature']).replace(/\s+/g, '').slice(0,-2))
        let tmp = Math.floor((n - 32) * (5/9))
        let capitalizedState = obj['state']
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

        return `${tmp}°Celsius in ${obj['city']}, ${capitalizedState}`
    });
}

//
console.log(tempForecasts([
    {
        city: 'Pasadena',
        temperature: ' 101 °F',
        state: 'california jones',
        region: 'West',
    },
]))