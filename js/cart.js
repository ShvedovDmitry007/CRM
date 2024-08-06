'use strict';

const cart = {
  items: [],  // пустой массив - это товары
  totalPrice: 0,  // общая стоимость корзины
  count: 0,   // количество товаров

    // Добавляем товар. Создаем новый объект, передаем в него свойство и значения, пушим в массив items.
    // Прибавляем к общей стоимости корзины стоимость товаров умноженную на количество.
  add(productName, productPrice, productCount) {   
    const item = {
      name: productName,
      price: productPrice,
      countGoods: productCount,
    }
    
    this.items.push(item);

    return item;
  },

    // Увеличиваем количество товаров в корзине
  increaseCount(num) {   
    return num + this.countGoods;
  },

    // Считаeм общую стоимость товаров в корзине
  calculateItemPrice() {    
    this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.countGoods, 0);
    return this.totalPrice;
  },

    // Очищаем корзину. Обнуляем значения объекта Cart.
  clear() {   
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

    // Печатаем корзину в консоль
  print() { 
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость товаров: ${cart.totalCartPrice} $`);
  },
};

Object.defineProperty(cart, 'totalCartPrice', {
  get() {
    return this.calculateItemPrice();
  },
});

// Добавляем новые товары через функцию Add
cart.add("Sony Playstation", 500, 2);
cart.add("iPhone", 600, 5);
cart.add("MacBook", 1000, 3);
cart.add("Яндекс Станция", 300, 3);
cart.add("Кофемашина", 800, 1);

cart.print();


// Задача 2 
// задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов

function getNumberOfUniqueIPs(ipAddresses) {
  return [...new Set(ipAddresses)].length;
}
