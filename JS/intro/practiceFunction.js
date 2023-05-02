var myGlobal = 10;
//example
// function reuseablefunction() {
//   console.log("Hey,there");
// }
// reuseablefunction();
// //function with parameters
// function functionWithArgs(a, b) {
//   console.log(a - b);
// }
// functionWithArgs(10, 2);
// function functionWithArgs(a, b) {
//   console.log(a + b);
// }
// functionWithArgs(10, 2);
//Global scope
function fun() {
  global1 = 5;
}
function fun2() {
  output = "";
  if (typeof myGlobal != "undefined") {
    output += "My Global is " + myGlobal;
  }
  if (typeof global1 != "undefined") {
    output += "\n My Global is " + global1;
  }
  console.log(output);
}
fun();
fun2();
//local Scope and functions
function myLocalScope() {
  var myVar = 5.8;
  console.log(myVar);
}
myLocalScope();
//Global vs Local in functions//here local variable takes precedence over global variable
var dress = "T-shirt";
function dressCode() {
  var dress = "Sweater";
  return dress;
}
console.log(dressCode());
//Return value with return statement
function minus7(num) {
  return num - 7;
}
console.log(minus7(15));
function multiply(num) {
  return num * 5;
}
console.log(multiply(5));
//Assignment with returned value
var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed);
//Stand In-Line
function nextInLine(arr, num) {
  arr.push(num);
  return arr.shift();
}
var testarray = [1, 2, 3, 4, 5, 6];
console.log("Before: " + JSON.stringify(testarray));
console.log(nextInLine(testarray, 7));
console.log("After: " + JSON.stringify(testarray));
//Boolean Values
function boolfunc() {
  return false;
}
//if Statements
function trueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it is true.";
  }
  return "No, it is false";
}
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, it is true.";
  }
  return "No, that was False";
}
console.log(trueOrFalse(false));
//Equality Operators
function testEquals(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEquals(10));
//COMPARISON with strict equality operators
function testStrict(val) {
  if (val === "7") {
    return "Equal";
  }
  return "Not equal";
}
console.log(testStrict(7));
//Comparison of equality
function compareEquals(a, b) {
  if (a === b) {
    return "EQUAL";
  }
  return "Not EQUAL";
}
console.log(compareEquals(10, "10"));
//Inequality
function testInequals(val) {
  if (val != 12) {
    return "Not equal";
  }
  return "Equal";
}
console.log(testInequals(12));
function testStrInequals(val) {
  if (val !== 12) {
    return "Not Equal...";
  }
  return "Equals...";
}
console.log(testStrInequals("12"));
console.log(testStrInequals(12));

console.log(testStrInequals(10));
//Equlity operations
function greaterthan(val) {
  if (val > 500) {
    return "Value is greater than 500";
  }
  if (val < 10) {
    return "value is less than 10";
  }
  return "The value is between 10 and 500";
}
console.log(greaterthan(10000));
console.log(greaterthan(100));
//logical operators
function testLogical(val) {
  if (val < 50 && val >= 25) {
    return "Yes";
  }
  return "NO";
}
console.log(testLogical(15));
console.log(testLogical(25));
console.log(testLogical(35));
