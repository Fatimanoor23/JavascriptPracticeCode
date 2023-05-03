const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log("The array the removal of first two digits:");
console.log(arr);
console.log("The source list was:");
console.log(source);
