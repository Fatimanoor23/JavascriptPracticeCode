//Golf code
var name = [
  "Hold-in-One",
  "Eagle",
  "birdie",
  "Par",
  "Bogey",
  "Double bogey",
  "Go Home",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return name[0];
  } else if (strokes <= par - 2) {
    return name[1];
  } else if (strokes <= par - 1) {
    return name[2];
  } else if (strokes == par) {
    return name[3];
  } else if (strokes >= par + 1) {
    return name[4];
  } else if (strokes == par + 2) {
    return name[2];
  } else if (strokes >= par + 3) {
    return name[5];
  }
}
console.log(golfScore(5, 4));
