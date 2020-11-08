// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

const getProductsOfAllIntsExceptAtIndex = function (array) {
  const newArr = [];
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product = 1;
    for (let z = 0; z < array.length; z++) {
      if (z !== i) {
        product = product * array[z];
      }
    }
    newArr.push(product);
  }
  return newArr;
}
console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]))