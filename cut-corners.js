function round(n) {
  if (n >= 0) {
    return (n - Math.floor(n) >= 0.5) ? Math.floor(n) + 1 : Math.floor(n);
  } else {
    return (n - Math.ceil(n) <= -0.5) ? Math.ceil(n) - 1 : Math.ceil(n);
  }
}
function ceil(n) {
  return (n > Math.floor(n)) ? Math.floor(n) + 1 : Math.floor(n);
}
function floor(n) {
  return (n > Math.ceil(n)) ? Math.ceil(n) - 1 : Math.ceil(n);
}
function trunc(n) {
  if (n === Infinity){
    return Infinity
  }else if (n === -Infinity){
    return -Infinity
  }
  return (n >= 0) ? Math.floor(n) : Math.ceil(n);
}
// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))
