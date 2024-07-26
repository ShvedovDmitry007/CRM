'use strict';

const amountOfElements = 5;
const minRange = 2;
const maxRange = 10;
const line = 'odd';

const randomArrayLine = (quantity, min, max, parity) => {
  const random = [];

  for (let i = 0; i < quantity; i++) {

    if (parity === 'even') {
      random.push(Math.floor((Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)) * 2);
    } else {
      random.push(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) * 2 + 1);
    }
  };

  return random;
};

const lineResult = randomArrayLine(amountOfElements, minRange, maxRange, line);
console.log(`Задача 3. Массив случайных чисел в диапазоне от ${minRange} до ${maxRange}:`, lineResult);


// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел
