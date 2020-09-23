//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = wat ;

//create a number variable, it an be any number
const newNum = 12 ;

//create a boolean variable
const newBool = false ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

//Example 1:
function returnString(str) {
  //simply return the string provided: str
  return str;
}
console.log(str);

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  var x = 5;
  var y = 3;
  return z = x + y;
}
console.log(add(2,5));


function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  var x = 5;
  var y = 3;
  return z = x - y;
}
console.log(subtract(9,5));

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  return z = x * y;
}
console.log(multiply(4,5));

function divide(x, y) {
  // divide x by y and return the value
  // code here
  return z = x / y;
}
console.log(divide(9,3));

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
    if (x==y){
      return 'True';
    }
      return 'false';
  }
  console.log(areEqual(5,6));


function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  var str1 = 'ABCDEFGHIJKLMNOPQRYZ';
    var sln1 = str1.length;
  var str2 = 'vcxqwebfytujMNOPvRYZ';
    var sln2 = str2.length;
    if (sln1==sln2){
      return true;
    }
    return false;
}
console.log(areSameLength("str1, str2"))


function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if (num<90){
    return true;
  }
    return false;
}
console.log(lessThanNinety(150))

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num>50){
    return true;
  }
    return false;
}
console.log(greaterThanFifty(10))

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  return x % y;
}
console.log(getRemainder(25,7))

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return true;
  }
    return false;
}
console.log(isEven(127))

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if (num % 2 != 0) {
    return true;
  }
    return false;
}
console.log(isOdd(17))

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  return (Math.pow(num,2));
}
console.log(square(5))

function cube(num) {
  // cube num and return the new value
  // code here
  return (Math.pow(num,3));
}
console.log(cube(5))

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  return (Math.pow(num,exponent));
}
console.log(raiseToPower(2,4))

function roundNumber(num) {
  // round num and return it
  // code here
  return Math.round(num);
}
console.log(roundNumber(3.12))

function roundUp(num) {
  // round num up and return it
  // code here
  return Math.ceil(num);
}
console.log(roundUp(5.15))

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  return ((str) + "!")
}
console.log(addExclamationPoint('Hello world'))

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  // code here
  return ((firstName) + (lastName));
}
console.log(combineNames('Avion ','School'))

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  var str1 = "Sam";
  var str2 = "Hello, ";
  var str3 = "have a nice day ";
  var str4 = "!";
    return str2.concat(str3, str1, str4);
}
console.log(getGreeting('name'))

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  return length * width;
}
console.log(getRectangleArea(7,3))

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  var bh = base*height;
  return bh/2;
}
console.log(getTriangleArea(23,10))