const bubbleSort = function (inputArray) {
  let highest
  for (let i = 0; i < inputArray.length -1; i++) {
    if (inputArray[i] > inputArray[i+1]) {
      highest = inputArray[i];
      inputArray[i] = inputArray[i+1];
      inputArray[i+1] = highest;
    }
  }
  return inputArray;
}