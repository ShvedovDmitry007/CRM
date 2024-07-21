'use strict';

// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pref) => {

  const copyNames = [...arr];
  const pre = pref;
  let pushArr = [];

  for (let i = 0; i < copyNames.length; i++) {
    pushArr.unshift(pre + ' ' + copyNames[i]);
  }

  return pushArr;
};

addPrefix(names, 'Mr');
console.log('addPrefix: ', addPrefix(names, 'Mr'));