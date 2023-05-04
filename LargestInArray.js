//find the largest in array
function isLargest(arr) {
  max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

var largest = isLargest([2, 3, 4, 5, 6, 7, 8, 9]);
var large = isLargest([-1, 0]);
console.log(largest);
console.log(large);
