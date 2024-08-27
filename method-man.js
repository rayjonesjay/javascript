function words(str) {
    let result = [];
    let tmp = ""
    for (let i = 0; i < str.length; i++){
        if (str[i] === ' '){
            if (tmp !== ""){
                result.push(tmp);
                tmp = ""
            }
        }else{
            tmp += str[i];
        }
    }
    if (tmp !== ""){
        result.push(tmp);
    }
    return result
}

// let arr = "hello world this is new"
// console.log(words(arr));
function sentence(arr) {
    let res = ""
    for(let i = 0; i < arr.length; i++){
        if (i !== arr.length-1){
            res += arr[i] + " "
        }else{
            res += arr[i];
        }
    }
    return res
}
function capitalize(str) {
    let res = ""
    for (let i = 0; i < str.length; i++){
        if (i === 0){
            res += str[i].toUpperCase();
        }else{
            res += str[i].toLowerCase();
        }
    }
    return res
}
function yell(str) {
    let res = ""
    for (let i = 0; i < str.length; i++){
        if(str[i] >= 'a' && str[i] <= 'z'){
            res += str[i].toUpperCase();
        }else{
            res += String(str[i])
        }
    }
    return res
}
function whisper(str) {
    let res = ""
    for (let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            res += str[i].toLowerCase();
        }else{
            res += String(str[i])
        }
    }
    return "*"+res+"*"
}
