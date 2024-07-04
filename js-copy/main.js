'use strict';

// Первая задача:
const productName = prompt('Наименование товара');
const productCount = +prompt('Количество товара');
const productСategory = prompt('Категория товара');
const productPrice = +prompt('Цена товара');
const totalPrice = productCount * productPrice;

// Сравниваем полученые результаты, введённые пользователем. 
// Если пользователь вводит число в оба поля, то это true и выводится сообщение о товаре в консоль. 
// Если вводит другие символы, то это false и выводится в консоль ошибка.

if (productCount > 0 && productPrice > 0) {
  console.log(`На складе имеется ${productCount} единицы товара "${productName}" категории "${productСategory}" на общую сумму: ${totalPrice} долларов. Цена за одну единицу товара: $ ${productPrice}`);
} else {
  console.log('Вы ввели некорректные данные');
};
