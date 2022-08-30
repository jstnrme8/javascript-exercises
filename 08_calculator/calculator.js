const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const someArray = array;
	let total = 0;

  for ( let i = 0; i < someArray.length; i++) {
    total += someArray[i];
  }

  return total;
};

const multiply = function(array) {
  const someArray = array;  
  let product = 1;

  for ( let i = 0; i < someArray.length; i++) {
    product *= someArray[i];
  }

  return product;

};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
	let rval = 1;
  for (let i = 2; i <= a; i++) {
    rval *= i;
  }

  return rval;
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
