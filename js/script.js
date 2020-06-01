"use strict";

const arr=[2,13,26,8,10];
arr.sort(compareNum)
console.log(arr);

function compareNum(a,b){
    return a-b;
}
// arr[99]=0;
// console.log(arr.length);
// console.log(arr);

// ФорИч переберает все в аррее. аргументы в функции любые.
// первый это содержимое, второй индекс, третий имя массива
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} vnutri massiva ${arr}`);
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);// валью выводит значения аррея
// }

const str = prompt("",""); // принимаем любой формат
const products = str.split(","); // записываем в переменную разделяя запятой
products.sort();
console.log(products.join('; ')); //склеиваем в одну строку, разделяя семиколоном



