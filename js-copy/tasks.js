'use strict';

// Вторая задача:
const rain =  Math.round(Math.random());
// Math.random() - возвращает псевдослучайное число с плавающей запятой, которое больше или равно нулю и меньше единицы
// Math.round() - возвращает число, округлённое к ближайшему целому.

rain === 1 ? console.log('Пошёл дождь. Возьмите зонт!') : console.log('Дождя нет!');


// Третья задача:
// Приводим ответы пользователя к числу, поставив перед выражением унарный плюс "+"
const pointsMathematics = +prompt('Введите кол-во баллов по математике:');
const pointsRussianLanguage = +prompt('Введите кол-во баллов по русскому языку:');
const pointsComputerScience = +prompt('Введите кол-во баллов по информатике:');

// Проверяем условие: если сумма баллов больше или равна проходному баллу - студент поступил на бюджет.
// В противном случае - не поступил.
if (pointsMathematics + pointsRussianLanguage + pointsComputerScience >= 265) {
  console.log('Поздравляю, вы поступили на бюджет!');
} else {
  console.log('Вы не поступили на бюджет!');
}



// Четвёртая задача:

const minBanknote = 100; // минимальная купюра
const Banknote = +prompt('Cколько денег хотите снять?');

// Проверяем условие: Делим сумму желаемую к снятию на минимальную купюру. 
// Остаток от деления приравниваем к 0. Если 0 - то выдаем купюры.
// В противном случае - ошибка.
if (Banknote % minBanknote === 0) {
  console.log('Выдать запрашиваемую сумму!');
} else {
  console.log('Ошибка!');
}


