'use strict';
// Первая задача:

for (let a = 1; a <= 10; a++) {
  console.log(`Число ${a}`);

  for (let m = 1; m <= 10; m++) {
    console.log(`${a} в степени ${m} = ${a ** m}`);
  };
};