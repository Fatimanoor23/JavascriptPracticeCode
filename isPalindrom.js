// function revStr(str) {
//   var reversestr = " ";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversestr += str[i];
//   }
//   return reversestr;
// }

// function isPalindrom(str) {
//   revStr(str);
//   if (str === revStr) {
//     return "The string is Palindrom";
//   } else {
//     return "the string is not a palindrom";
//   }
// }
// var palindrom = isPalindrom("123321");
// console.log(palindrom);
// console.log(revStr("123321"));

function revStr(str) {
  var reversestr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversestr += str[i];
  }
  return reversestr;
}

function isPalindrom(str) {
  var reversedStr = revStr(str);
  if (str === reversedStr) {
    return "The string is Palindrome";
  } else {
    return "The string is not a palindrome";
  }
}

var palindrome = isPalindrom("123321");
console.log(palindrome);
console.log(isPalindrom("ABA"));
