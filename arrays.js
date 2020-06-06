var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  newArr = [ele, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(thisArray, thisElement) {
  thisArray.unshift(thisElement);
  return thisArray;
}

function addElementToEndOfArray(addArr, addEle) {
  anotherArr = [...addArr, addEle];
  return anotherArr;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}
