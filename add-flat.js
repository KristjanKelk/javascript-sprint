function sumNestedArray(arr) {
  let sum = 0;
  let flattenedArr = arr.flat(Infinity);
  
  for (let i = 0; i < flattenedArr.length; i++) {
    if (typeof flattenedArr[i] === 'number') {
      sum += flattenedArr[i];
    }
  }

  return sum;
}