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
