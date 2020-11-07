const exampleArr = [0, 1, 2, 3, 4, 5];
//at what index does x element appear in a list
//sweeping - start from beginnning to end - O(n)
//memory usage and speed are things to consider
//note only works if the list is ordered
//our guess is below

// const binarySearch = function (arr, elementToFind, previousSearchedIndex) {
//   const arrLength = arr.length;
//   const searchIndex = Math.round((arrLength/2) -1);
//   let cumluativeIndex = searchIndex + previousSearchedIndex;
//   if (arr[searchIndex] < elementToFind) {
//     cumluativeIndex += 1;
//     const slicedArr = arr.slice((searchIndex+1), arrLength);
//     binarySearch(slicedArr, elementToFind, cumluativeIndex);
//   } else if (arr[searchIndex] > elementToFind) {
//     cumluativeIndex -= 1;
//     const slicedArr = arr.slice(0, searchIndex);
//     binarySearch(slicedArr, elementToFind, cumluativeIndex);
//   } else if (arr[searchIndex] === elementToFind || arr.length === 1) {
//     // cumluativeIndex += 1;
//     return cumluativeIndex;
//   } else {
//     return 'Element not contained in array';
//   };
// }
// let answer = binarySearch(exampleArr, 1, 0);
// console.log(answer);
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right /2));
    if (compare(array[middle], element) === 1) {
      right = middle -1;
    } else if (compare(array[middle], element) === -1) {
      left = middle +1;
    } else if ((compare(array[middle], element) === 0)) {
      return middle;
    }
  }
  return -1;
};
