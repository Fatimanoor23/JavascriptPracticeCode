const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  //s=[5,7,2]
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);
//use obj.freeze(nameOfObject) if you dont want the mutation of numbers happen
