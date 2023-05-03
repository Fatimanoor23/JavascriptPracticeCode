function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(UpdatedTemp) {
      this._temp = UpdatedTemp;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temp = 26;
temp = thermos.temperature;
console.log(temp);
