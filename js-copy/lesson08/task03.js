'use strict';

const randomArrayLine = (quantity, min, max, parity) => {

  const newArray = [...Array(quantity)].fill().map(() => Math.floor(Math.random() * (max - min + 1)) + min);

  newArray.sort((a, b) => {
    return a - b;
  });

  if (parity === "even") {
    const evenArray = newArray.filter(function (num) {
        return num % 2 === 0 || num === 0;
    })

    const uniqEven = [...new Set(evenArray)]
    console.log(`Четные уникальные числа`+ ' ' + uniqEven);
    return evenArray;
    
  } else if (parity === "odd") {

    const oddArray = newArray.filter(function (num) {
        return num % 2 === 1;
    })
    
    const uniqOdd = [...new Set(oddArray)]
    console.log(`НЕЧетные уникальные числа`+ ' ' + uniqOdd);
    return oddArray;
  }

};

console.log( ` Все Четные Числа:` + ' ' +randomArrayLine(20, 40, 1, "even"));
console.log( ` Все НЕЧетные Числа:` + ' ' +randomArrayLine(20, 40, 1, "odd"));
