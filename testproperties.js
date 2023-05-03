const car = {
  tires: 4,
  enginetype: "Fuel",
  plateNo: 12334,
};

function checkObj(testprop) {
  if (car.hasOwnProperty(testprop)) {
    return car[testprop];
  } else {
    return "Not found";
  }
}

console.log(checkObj("plateNo"));
console.log(checkObj("Hello"));
