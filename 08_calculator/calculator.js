const add = function(num1, num2) {
	addResult = num1 + num2;
  return addResult;
};

const subtract = function(num1, num2) {
	subResult = num1 - num2;
  return subResult;
};

const sum = function(arr) {
  let total = 0;
  arr.forEach(function(num) {
    total += num;
  });
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(function(num) {
    total *= num;
  });
  return total;
};

const power = function(num1, num2) {
  powerResult = Math.pow(num1, num2);
  return powerResult;
};

const factorial = function(num) {
	if (num < 0) 
    return -1;
  else if (num == 0) 
    return 1;
  else {
    return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
