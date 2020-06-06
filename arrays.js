var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  newArr = [ele, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray (arr, ele) {
  arr.unshift(ele);
  return ele;
}
