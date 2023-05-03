function ourRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(ourRandomRange(1, 9));
