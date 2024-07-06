'use strict';
// Третья задача:

const reverseStr = (addStr) => {
  let resultStr = ''; // Принимаем результат в пустую переменную

  // Проходим по каждому символу (length - количество символов), 
  // уменьшаем i на один и заново проходим, пока не дойдем до конца.
  for (let i = addStr.length; i >= 0; i--) {
    console.log(i);

    resultStr = i; // Записываем полученый результат в пустую переменную
  }

  return resultStr;
};

const resultFunctionn = reverseStr('Привет мир');
console.log(resultFunctionn);

// Напишите функцию, которая принимает строку и возвращает обратную строку

// Пример: "Привет мир" => "рим тевирП"