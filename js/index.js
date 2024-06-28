'use strict';

const productName = "Игровая консоль PlayStation 5";          //Наименование товара
const productCount = 5;                                       //Количество товара
const productСategory = "Электроника";                        //Категория товара
const productPrice = 670;                                     //Цена товара
const totalPrice = productCount * productPrice; 


console.log(productName);
console.log('Общая сумма товара: ', `$ ${totalPrice}`);