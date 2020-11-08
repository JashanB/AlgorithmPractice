const selectionSort = function (array) {
  let copyArr = array
  const newArr = [];
  let lowest = array[0];
  while (newArr.length < array.length) {
    for (let element of copyArr) {
      if (element < lowest) {
        lowest = element;
      }
    }
    newArr.push(lowest);
    copyArr = copyArr.filter(x => x!== lowest);
    lowest = copyArr[0];
  }
  return newArr;
}