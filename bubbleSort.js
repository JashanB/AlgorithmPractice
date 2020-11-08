const bubbleSort = function (inputArray) {
  let highest
  let j = 0
  while (j < inputArray.length) {
    for (let i = 0; i < inputArray.length -1; i++) {
      if (inputArray[i] > inputArray[i+1]) {
        highest = inputArray[i];
        inputArray[i] = inputArray[i+1];
        inputArray[i+1] = highest;
      }
    }
    j++
  }
  return inputArray;
}