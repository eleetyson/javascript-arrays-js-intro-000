var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return ele;
}

function destructivelyAddElementToBeginningOfArray (arr, ele) {
  arr[1] = ele;
  return ele;
}
