function repeat(str,num){
    if(num <= 0){
        return "";
    }
    return str + repeat(str,num-1)
}
