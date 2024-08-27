function words(str) {
    let result = [];
    let tmp = ""
    for (let i = 0; i < str.length; i++){
        if (str[i] === ' '){
            if (tmp !== "" || result.length > 0){
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
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function yell(str) {
    return str.toUpperCase();
}
function whisper(str) {
    return "*"+str.toLowerCase()+"*"
}
