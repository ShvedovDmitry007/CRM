'use strict';

const guessTheNumber = () => {
  let gameOver = false;
  const number = Math.floor(Math.random() * 100) + 1;

  while (!gameOver) {
    /*получаем ответ юзера*/
    let answer = +prompt("Я загадал число от 1 до 100, угадывайте");

    /*простая проверка на число*/
    if (Number.isNaN(answer)) {
      alert("Введи число!");
    }

    /*выход или ноль*/
    if (answer === 0) {
      alert("Ну как хотите")
      break;
    }

    if (answer > number) {
      alert("Меньше!")
    }

    if (answer < number) {
      alert("Больше!")
    }

    if (answer === number) {
      alert("Правильно!")
      gameOver = true;
    }
  }
};

guessTheNumber();