'use strict';
// Вторая задача:

const isPrime = number => {

  let result;
  
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      result = 'Число не простое';
      return result;
    } else {
      result = 'Число простое';
      return result;
    };
  };
};

console.log(isPrime(72));