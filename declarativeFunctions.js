const bicycle = {
  gear: 2,
  //   setGear: function (newGear) {
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(4);
console.log(bicycle.gear);
