function invert(obj){
    const arr = Object.entries(obj)
    // console.log(arr);
    let result = []
    for (let i=0; i<arr.length; i++) {
        let array = arr[i];
        let tmp = array[0];
        array[0] = array[1];
        array[1] = tmp;
        result.push(array);
    }
    return arr
}