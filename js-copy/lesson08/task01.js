'use strict';

const amountOfElements = 5;

const randomArray = quantity => {
  const random = [];

  for (let i = 0; i < quantity; i++) {
    random.push(Math.floor(Math.random() * 100));
  }

  return random;
};

const result = randomArray(amountOfElements);
console.log(`Задача 1. Массив случайных чисел от 1 до 100:`, result);


