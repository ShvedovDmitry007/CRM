'use strict';
// Вторая задача:

// Функция принимает число и возвращает true, если число является простым, а в ином случае false.

const isPrime = (num) => {

  let takeNumber = Number(num);
  let resultStr = '';

  for (let i = 0; i < takeNumber.length; i++) {
    
    if (takeNumber % 1 === takeNumber % takeNumber) {
      resultStr = takeNumber
      return true;
    } else {
      return false;
    }
    return true;
  }
};

console.log(isPrime(5));



// Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.

// Например, 5 - простое число, так как делится без остатка только на 1 и на себя.

// 151, 911, 1987 - так же простые числа

// Используйте цикл for в функции