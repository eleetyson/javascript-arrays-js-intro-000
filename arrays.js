var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  [ele...arr];
  return arr;
}

function destructivelyAddElementToBeginningOfArray (arr, ele) {
  arr.unshift(ele);
  return ele;
}
