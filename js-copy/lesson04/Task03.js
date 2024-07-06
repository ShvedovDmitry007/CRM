'use strict';
// Третья задача:
// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.

const calculate = (cartTotal, itemsCart, promoCode = 0) => {
  let totalPrice = cartTotal;

    // Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
  if (itemsCart >= 10) {
    totalPrice -= totalPrice * 0.03
  }

    // При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
  if (cartTotal > 30000) {
    totalPrice -= (totalPrice - 30000) * 0.15
  }

    // Если промокод равен "METHED", то скидка 10%
  if (promoCode === "METHED") {
    totalPrice -= totalPrice * 0.10
  }
    // Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
  if (promoCode === "G3H2Z1" && totalPrice > 2000) {
    totalPrice -= 500
  } else if (promoCode === "G3H2Z1" && totalPrice < 2000) {
    totalPrice -= 0
  }

  return totalPrice;
};

console.log(`Сумма покупок: ${calculate(35000, 14, "METHED")} рублей`);

