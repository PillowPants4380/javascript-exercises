const convertToCelsius = (temp) => {

 return Math.round(((temp - 32) * .5556) * 10)/10;

};

const convertToFahrenheit = (temp) => {

  return Math.round(((temp * 1.8) + 32)*10)/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
