"use strict";

//1)
    console.log(typeof(String(null)));
    console.log(typeof(String(4)));

//2)
console.log(typeof((5+''))); // при сложение со строкой всегда строка тип данных

const num = 5;
console.log("https://vk.com/catalog/" + num);
const fontSize=26 + 'px';

// To Number

//1)

console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello","");

// to boolean
// 0,'', null, undefined,NaN; // это все фолс
1)
let switcher = null;
if(switcher){
    console.log('working...');
}
switcher = 1;
if(switcher){
    console.log('working...');
}
2)
console.log(typeof(Boolean('4')));

3)
console.log(typeof(!!"444")); // превратили в булеан