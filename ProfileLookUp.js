var contacts = [
  {
    firstname: "Akira",
    lastname: "Larry",
    Number: "03153637289",
    Likes: ["Pizza", "Coding", "Reading"],
  },
  {
    firstname: "Noora",
    lastname: "shae",
    Number: "03134537289",
    Likes: ["Pasta", "testing & Coding", "Reading"],
  },
  {
    firstname: "Fazi",
    lastname: "shahid",
    Number: "03320290289",
    Likes: ["traveling", "Photography", "Baking"],
  },
];
function lookupProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstname === name) {
      return contacts[i][prop] || "no such property.";
    }
  }
  return "no such contact.";
}
var data = lookupProfile("Akira", "Likes");
var d = lookupProfile("Akirna", "Likes");
console.log(data);
console.log(d);
