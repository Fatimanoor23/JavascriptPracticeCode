const person = {
  name: "Fatima Noor",
  age: "22",
};
const greetings = `Hello, My name is ${person.name} ! I am ${person.age} years old.`;
console.log(greetings);

const result = {
  success: ["max-lenght", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreaks"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultDisplayArr.push(`<li class="text-warning">${arr[i]}</`);
  }
  return resultDisplayArr;
}
const resultDisplayArr = makeList(result.failure);
console.log(result);
