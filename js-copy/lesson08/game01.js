'use strict';

// Создайте файл game01.js

// Написать простой игровой бот "Угадай число", который умеет следующее:

const guessTheNumber = () => {
  const botRandomNumber = Math.floor(Math.random() * 100); //Загадывает число от 1 до 100;
  console.log(botRandomNumber);

  const userNumber = +prompt('Введите число: ');
  console.log(userNumber);

  if (userNumber === null) {
    alert('Игра закончена!');
  }


  if (userNumber > botRandomNumber) {
    alert('Меньше!');
  } else if (userNumber < botRandomNumber) {
    alert('Больше!');
  } else if (userNumber === botRandomNumber) {
    alert('Правильно!');
  } else if (userNumber === null) {
    alert('Игра закончена!');
  }

  return;
};

guessTheNumber();




// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.