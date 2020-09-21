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
console.log(add("x, y"));


function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  var x = 5;
  var y = 3;
  return z = x - y;
}
console.log(subtract("x, y"));

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  var x = 5;
  var y = 3;
  return z = x * y;
}
console.log(multiply("x, y"));

function divide(x, y) {
  // divide x by y and return the value
  // code here
  var x = 9;
  var y = 3;
  return z = x / y;
}
console.log(divide('x, y'));

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
    var x = 4;
    var y = 4;
    if (x==y){
    return True;
    }
    return false;
  }
  console.log(areEqual("x, y"));


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
  var num = 150
  if (num<90){
    return true;
  }
    return false;
}
console.log(lessThanNinety("num"))

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  var num = 10
  if (num>50){
    return true;
  }
    return false;
}
console.log(greaterThanFifty("num"))

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  var x = 25;
  var y = 7;
  return z = x % y;
}
console.log(getRemainder('x, y'))

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  var x = 127;
  if (x % 2 === 0) {
    return true;
  }
    return false;
}
console.log(isEven('num'))

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
   var x = 17;
  if (x % 2 != 0) {
    return true;
  }
    return false;
}
console.log(isOdd('num'))

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  var x = 5;
  return (Math.pow(x,2));
}
console.log(square('num'))

function cube(num) {
  // cube num and return the new value
  // code here
  var x = 5;
  return (Math.pow(x,3));
}
console.log(cube('num'))

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  var num = 2;
  var exponent = 4;
  return (Math.pow(num,exponent));
}
console.log(raiseToPower('num, exponent'))

function roundNumber(num) {
  // round num and return it
  // code here
  var num = 3.12;
  var y = Math.round(num);
  return y;
}
console.log(roundNumber('num'))

function roundUp(num) {
  // round num up and return it
  // code here
  var num = 6.12;
  var y = Math.ceil(num);
  return y;
}
console.log(roundUp('num'))

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  var str = "hello world";
  return ((str) + "!")
}
console.log(addExclamationPoint('str'))

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  // code here
  var firstName = "Avion ";
  var lastName = "School";
  return ((firstName) + (lastName));
}
console.log(combineNames('firstName, lastName'))

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  var str1 = "Sam";
  var str2 = "Hello, ";
  var str3 = "have a nice day ";
  var str4 = "!";
  var x = str2.concat(str3, str1, str4);
  return x;
}
console.log(getGreeting('name'))

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  var length = 7;
  var width = 3; 
  var output = length * width;
  return output;
}
console.log(getRectangleArea('length, width'))

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  var b = 3;
  var h = 7;
  var bh = b*h;
  var area = bh/2;
  return area;
}
console.log(getTriangleArea('base, height'))