function ternaryOp(a, b) {
  return a === b ? true : false;
}
console.log(ternaryOp(1, 2));

//multiple ternary operators
function checkSign(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(10));
