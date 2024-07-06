'use strict';
// Напишите функцию, которая принимает строку и возвращает модифицированную строку

const modifiedString = (string) => {

  // Извлекаем первую букву, делаем её заглавной. Далее приводим все буквы к нижнему регистру, извлекаем первую.
  const res = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();

  return res;
};

console.log(modifiedString('привет Мир'));

// Пример:  "привет Мир" => "Привет мир"