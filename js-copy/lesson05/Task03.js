'use strict';
// Третья задача:

// Превращаем в массив синтаксис скобок
// Метод reverse меняет порядок
// Метод join собирает обратно в строку

const str = prompt('Введите текст');

const reverseString = str => {
  const newSring = [...str].reverse().join('');
  return newSring;
}

console.log(reverseString(str));