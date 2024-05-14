const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const arrSum = arr.reduce((total, item) => total + item, 0);

  return arrSum;
};

const multiply = function(arr) {
  const arrProduct = arr.reduce((total, item) => total * item, 1);

  return arrProduct;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
	let product = 1;
  
  if (n === 0) {
    return 1;
  }
  else {
    for (let i = 1; i <= n; i++) {
      product = product * i;
    }
  }

  return product;
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
