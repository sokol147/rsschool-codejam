module.exports = function sumOfOther(array){
  const arr = array.slice();

  let sum = arr.reduce(function(sum, item){
    return sum + item;
  },0);

  for(let i = 0; i < arr.length; i++){
    arr[i] = sum - arr[i];
  }

  return arr;
}