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
