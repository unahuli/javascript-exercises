const convertToCelsius = function(fahrenheit) {
  let initialVal = ((fahrenheit - 32) * 5/9);
  return Math.round(initialVal * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let initialVal = ((celsius * 9/5) + 32);
  return Math.round(initialVal * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
