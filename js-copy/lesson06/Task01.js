'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (all, failed) => {
  let passed = all.filter(e => !~failed.indexOf(e));
  passed.join('-');

  return passed;
};

const newArr = filter(allStudents, failedStudents);
console.log(`Cтуденты сдавшие экзамен: ${newArr}`);


// Для короткой записи такой проверки удобно использовать побитовое НЕ ~ которое даст 0 в единственном случае, когда операнд равен -1. Его отрицание ! даст true в том же единственном случае. Итого эта функция вернёт true только, если элемент не найден в массиве.