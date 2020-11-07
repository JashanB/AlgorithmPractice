const exampleArr = [0, 1, 2, 3, 4, 5];
//at what index does x element appear in a list
//sweeping - start from beginnning to end - O(n)
//memory usage and speed are things to consider
//note only works if the list is ordered
//our guess is below

const binarySearch = function (arr, elementToFind, previousSearchedIndex) {
  const arrLength = arr.length;
  const searchIndex = Math.round((arrLength/2) -1);
  let cumluativeIndex = searchIndex + previousSearchedIndex;
  if (arr[searchIndex] < elementToFind) {
    cumluativeIndex += 1;
    const slicedArr = arr.slice((searchIndex+1), arrLength);
    binarySearch(slicedArr, elementToFind, cumluativeIndex);
  } else if (arr[searchIndex] > elementToFind) {
    cumluativeIndex -= 1;
    const slicedArr = arr.slice(0, searchIndex);
    binarySearch(slicedArr, elementToFind, cumluativeIndex);
  } else if (arr[searchIndex] === elementToFind || arr.length === 1) {
    // cumluativeIndex += 1;
    return cumluativeIndex;
  } else {
    return 'Element not contained in array';
  };
}
let answer = binarySearch(exampleArr, 1, 0);
console.log(answer);

