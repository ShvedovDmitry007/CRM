'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  const copyArr = [...arr];
  let averageBill = 0;

  for (let i = 0; i < copyArr.length; i++) {
    averageBill += Math.floor(copyArr[i] / copyArr.length);
  };

  return averageBill;
};

const total = getAverageValue(allCashbox);
console.log(`Средний чек: ${total} рублей`);