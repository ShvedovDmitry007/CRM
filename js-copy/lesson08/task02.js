'use strict';

const amountOfElements = 5;
const minRange = 1;
const maxRange = 5;

const randomArrayInRange = (quantity, min, max) => {
  const random = [];

  for (let i = 0; i < quantity; i++) {
    random.push(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)));
  }

  return random;
};

const rangeResult = randomArrayInRange(amountOfElements, minRange, maxRange);
console.log(`Задача 2. Массив случайных чисел в диапазоне от ${minRange} до ${maxRange}:`, rangeResult);
