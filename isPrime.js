//check if the given number is prime or not
function isPrime(num) {
  var i = 2;

  if (num <= 0 || num == 1) {
    return "Not Prime";
  } else {
    while (i <= num / 2) {
      if (num % i == 0) {
        return "Not Prime";
      } else {
        i += 1;
      }
    }
    return "Prime";
  }
}

console.log(isPrime(23));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(24));
console.log(isPrime(13));
console.log(isPrime(-1));
