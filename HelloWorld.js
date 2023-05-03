var a;
var b;
a = 7;
b = 2;

a += 2;
console.log(a);
//Mathematical operations
var sum = a + 0;
var summation = a + 10;
var difference = b + 10;
var remainder = a % 2;

/* concatenate
strings */
var mystr = "My name is ";
var name = "Fatima";
mystr += name;
console.log(mystr);
var str = "Name is Ali";
var strlength = str.length;
console.log(strlength);
var firstletter = str[6];
console.log(firstletter);
//fixing string alphabets
var newstr = "Jello world";
newstr = "Hello world";
console.log(newstr);
//find the Nth character
var name = "ADA";
var lastname = "Larry";
var lastLetterofName = name[name.length - 3];
console.log(lastLetterofName);
//WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store" +
    " " +
    myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "runs", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
//Arrays
var arr = [10, "Quiz"];
console.log(arr);
//nested array
var nestarr = [
  ["Quiz", 19],
  ["Exam", 100],
];
console.log(nestarr);
//Access array data
var arr = [10, 20, 40, 50, 60];
var ourData = arr[2];
console.log(ourData);
//MODIFY THE ARRAY;
arr[0] = 45;
console.log("Modified array:");
console.log(arr);
//multi-dimensional array
var ab = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
var data = ab[2][1];
console.log(data);
//Multiple arrays with push
var aaa = ["star", "Moon", "Galaxies"];
aaa.push(["sky", "rain"]);
console.log(aaa);
//Arrays pop // pop the last item
var arraypop = [1, 2, 3];
var removedarray = arraypop.pop();
console.log(removedarray);
var removedarray = arraypop.pop();
console.log(removedarray);
var array = ["saaad", 3, "cat", [3, "Ali"]];
//modification of array using shift //delete from the start
var arrdel = array.shift();
console.log(arrdel);
//modification of array using unshift // add at the start
array.unshift("Happy");
console.log(array);
//Shopping list
var shoppingList = [
  ["Cereals", 3],
  ["Bread", 3],
  ["eggs", 12],
  ["Chocolates", 12],
];
console.log(shoppingList);
