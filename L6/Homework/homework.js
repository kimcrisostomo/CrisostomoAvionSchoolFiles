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
  for (let i = 0; i < arr.length; i++) {
    arr[i]=arr[i]+1;
  }
  return arr;
}
console.log(incrementByOne([12,13,14,15]));

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
  return words = words.join(' ');
}
console.log(wordsToSentence(["I", "am", "a", "Sage", "main", "in", "Valorant!"]))

function contains(arr, item) {
  if (arr.includes(item, 0)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(contains(['Air', 'Wind', 'Fire'], 'Earth'))


function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
  return sum;
}

console.log(addNumbers([10,10,16]))

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0
    for (let i = 0; i < testScores.length; i++) {
      sum = sum + testScores[i];
    }
  return sum/testScores.length;
}
console.log(averageTestScore([1, 2, 3, 4 ,5]))

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return Math.max.apply(null, numbers);
}
console.log(largestNumber([1, 2, 3, 4, 5]))


function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let product = 1;
  if(arguments.length == 0){
    return 0;}
  
  else if(arguments.length == 1){
    return arguments[0];
  }
  
  else{
    for (let i=0; i < arguments.length; i++) {
          product*= arguments[i];
    }
  return product;
  }
}
console.log(multiplyArguments(21))

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