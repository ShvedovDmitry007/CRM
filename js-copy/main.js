'use strict';

const productName = String(prompt('Наименование товара'));
const productCount = Number(prompt('Количество товара'));
const productСategory = String(prompt('Категория товара'));
const productPrice = Number(prompt('Цена товара'));
const totalPrice = productCount * productPrice;

console.log(typeof productName);
console.log(typeof productCount);
console.log(typeof productСategory);
console.log(typeof productPrice);

console.log(`На складе имеется ${productCount} единицы товара "${productName}" категории "${productСategory}" на общую сумму: ${totalPrice} долларов. Цена за одну единицу товара: $ ${productPrice}`);

