"use strict";

const str = "teSt";


// console.log(str[2]='d');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // с какого символа начало

const logg = "Hello World";

// console.log(logg.slice(6,11)); // какой кусок вывести из строки "с/по"

// console.log(logg.substring(6,11)); // аналог слайса

console.log(logg.substr(6,3)); // какой кусок вывести из строки "начиная и сколько символов от начала"

const num=12.2;
console.log(Math.round(num)); // округление чисел

const test = "12.2px";
console.log(parseInt(test)); // вытаскиваем целое число из стринг

console.log(parseFloat(test));// выстаскиваем число с запятой из стринг