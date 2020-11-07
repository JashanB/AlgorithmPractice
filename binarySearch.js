const exampleArr = [0, 1, 2, 3, 4, 5]
//at what index does x element appear in a list
//sweeping - start from beginnning to end - O(n)
//memory usage and speed are things to consider
//note only works if the list is ordered
//our guess is below

const binarySearch = function (arr, elementToFind) {
  const arrLength = arr.length;
  //length/2 - 1 to get middle 
  const searchIndex = Math.round((arrLength/2) -1);
  // if else statements to see if higher, lower, or equal
  if (arr[searchIndex] < elementToFind) {
    const slicedArr = arr.slice(searchIndex, arrLength);
    binarySearch(slicedArr, elementToFind);
  } else if (arr[searchIndex] > elementToFind) {
    const slicedArr = arr.slice(0, searchIndex);
    binarySearch(slicedArr, elementToFind);
  } else if (arr[searchIndex] === elementToFind) {
    return searchIndex;
  } else {
    return 'Element not contained in array'
  };
};

