//chaining if else statments;
function checkSize(num) {
  if (num <= 5) {
    return "Small";
  } else if (num <= 10 && num > 5) {
    return "Medium";
  } else if (num > 10 && num <= 50) {
    return "Large";
  } else {
    return "Extra Large";
  }
}
console.log(checkSize(5));
console.log(checkSize(10));
console.log(checkSize(50));
console.log(checkSize(90));
