'use strict';

const cart = {
  items: [],  // пустой массив - это товары
  totalPrice: 0,  // общая стоимость корзины
  count: 0,   // количество товаров

    // Получаем общую стоимость товаров
  getTotalPrice() {   
    return this.totalPrice;
  },

    // Добавляем товар. Создаем новый объект, передаем в него свойство и значения, пушим в массив items.
    // Прибавляем к общей стоимости корзины стоимость товаров умноженную на количество.
  add(productName, productPrice, productCount) {   
    const item = {
      name: productName,
      price: productPrice,
      countGoods: productCount,
    }
    
    this.items.push(item);
    this.totalPrice += productPrice * productCount;

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
    console.log(`Общая стоимость товаров: ${this.totalPrice} $`);
  },
};

// Добавляем новые товары через функцию Add
cart.add("Sony Playstation", 500, 2);
cart.add("iPhone", 600, 5);
cart.add("MacBook", 1000, 3);

cart.print();