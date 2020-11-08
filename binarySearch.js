const exampleArr = [0, 1, 2, 3, 4, 5];
//at what index does x element appear in a list
//sweeping - start from beginnning to end - O(n)
//memory usage and speed are things to consider
//note only works if the list is ordered
//our guess is below


let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
// let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
//   let left = 0;
//   let right = array.length - 1;
//   while (left <= right) {
//     let middle = Math.floor((left + right /2));
//     if (compare(array[middle], element) === 1) {
//       right = middle -1;
//     } else if (compare(array[middle], element) === -1) {
//       left = middle +1;
//     } else if ((compare(array[middle], element) === 0)) {
//       return middle;
//     }
//   }
//   return -1;
// };

// let binarySearchWithRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
//   if (left > right) {
//     return -1;
//   };
//   const middle = Math.floor((right + left/2));
//   if (defaultCompare(array[middle], element) === 1) {
//     binarySearchWithRecursion(array, element, compare, left , middle -1);
//   } else if (defaultCompare(array[middle], element) === -1) {
//     binarySearchWithRecursion(array, element, compare, middle +1, right);
//   } else if (defaultCompare(array[middle], element) === 0) {
//     return middle;
//   }
//   return -1;
// };

//tail recursion
// let binarySearchWithRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
//   if (left > right) { return -1; }
//     const middle = Math.floor((right + left) / 2);
//     const comparison = compare(element, array[middle]);
    
//     if (comparison === 0) { return middle; }
    
//     const newBounds = comparison === -1
//         ? [left, middle - 1]
//         : [middle + 1, right];
    
//     return binarySearchWithRecursion(array, element, compare, ...newBounds);

// };

let binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
  if (array.length === 1) {
    return array[0];
  };
  const middle = Math.floor((array.length - 1) / 2);
  const comparison = compare(element, array[middle]);
  let newArray = array
  if (comparison === 0) { return middle; }
  comparison === 1 ? newArray = newArray.slice(middle + 1) : newArray = newArray.slice(0, middle - 1)

  return binarySearchWithArraySplitting(newArray, element, compare);
};

export default binarySearchWithArraySplitting;