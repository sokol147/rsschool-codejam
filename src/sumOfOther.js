module.exports = function sumOfOther(array) {
  const arr = array.slice();
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = sum - arr[i];
  }

  return arr;
};
