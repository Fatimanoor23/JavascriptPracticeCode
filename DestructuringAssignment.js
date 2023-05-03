const local_forcast = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};
function getMaxOfTmrw(forcast) {
  "use strict";
  //   const getMaxOfTomorrow = undefined;
  //   return getMaxOfTomorrow;
  //nested
  const {
    tomorrow: { max: getMaxOfTomorrow },
  } = forcast;
  return getMaxOfTomorrow;
}

console.log(getMaxOfTmrw(local_forcast));
