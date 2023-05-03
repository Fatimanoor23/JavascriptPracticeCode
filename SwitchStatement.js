//Switch statement
function checkSwitch(num) {
  var ans = "";
  switch (num) {
    case 1:
      ans = "ALpha";
      break;
    case 2:
      ans = "Beta";
      break;
    case 3:
      ans = "Gamma";
      break;
    case 4:
      ans = "Delta";
      break;
    default:
      ans = "Name";
      break;
  }
  return ans;
}
console.log(checkSwitch(4));
console.log(checkSwitch(1));
console.log(checkSwitch(3));
console.log(checkSwitch(6));
