var ourDog = {
  name: "Camper",
  legs: 4,
  tail: 1,
  friends: ["Everything!"],
};
//accessing object using dot
var name = ourDog.name;
var leg = ourDog.legs;
console.log(name);
console.log(leg);
//accessing object using bracket
var name = ourDog["name"];
console.log(name);
//add properties
ourDog.bark = "Bow-wow";
console.log(ourDog);
//delete properties
delete ourDog.tail;
console.log(ourDog);
