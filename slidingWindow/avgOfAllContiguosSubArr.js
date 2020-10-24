function avgOfSubArrays(arr, length) {
  let array = [], sum = 0.0, windowStart = 0;
  if (arr.length < length) {
    return array;
  }
  for (let windowEnd = 0; windowEnd < arr.length ; windowEnd++) {
    sum += arr[windowEnd];
    if (windowEnd >= length - 1) {
      array.push(sum / length);
      sum -= arr[windowStart];
      windowStart = +1;
    }
  }
  return array;
}


console.log(avgOfSubArrays([1,2,3,4,5,6,7,8,9,10,11,12,13], 10))
