// Do not change any of the function names

//Example 1:
function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}
console.log(returnFirst(['water', 'coffee', 'coke']));

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length -1];
}
console.log(returnLast(['panpan', 'ice bear', 'grizz']))

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}
console.log(getArrayLength(['panpan', 'ice bear', 'grizz']));


function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  item = arr.push(item);
  return arr;
}
console.log(addItemToArray(['panpan', 'ice bear', 'grizz'], 'koala'));


function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  item = arr.unshift(item);
  return arr;
}
console.log(addItemToFront(['Sage','Jett','Reyna','Raze'], 'KillJoy'));

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};