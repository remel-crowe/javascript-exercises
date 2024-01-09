const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((product, current) => product * current);
};

const multiply = function (arr) {
  let total;
  for (let i; i <= arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
