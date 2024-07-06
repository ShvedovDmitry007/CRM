'use strict';
// Первая задача

const findCommonDivisor = (a, b) => {

  if (a % b) {
    return findCommonDivisor(a, b);
  } 
  
  return findCommonDivisor(a, b);
};


console.log(findCommonDivisor(75, 135));

// Напишите функцию, вычисляющую наибольший общий делитель двух чисел