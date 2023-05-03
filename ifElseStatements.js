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

//If-else statements
function ifElseCondition(val) {
  if (val <= 50) {
    return "The value is less than or equal to 50";
  } else {
    return "Value is greater than 50";
  }
}
console.log(ifElseCondition(12));
console.log(ifElseCondition(60));
