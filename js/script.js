"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // всего лишь ссылка на объект. содержимое не копируется
// copy.a = 10; // т.к. копи изначально ссылка то а=10 в обж

//console.log(copy);
//console.log(obj);

function copy(mainObj){ // поверхностная копия
    let objCopy = {};
    let key;
    for (key in mainObj){
        objCopy[key]=mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);
newNumbers.a=10;
newNumbers.c.x=10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
}

console.log(Object.assign(numbers, add)); //добавляем методом один объект в другой

const clone = Object.assign({},add);//создаем пустой объект и лепим к нему адд
clone.d = 20;
// console.log(clone);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice(); // метод нарезки массива и копии
newArray[0]='ASDASDASD'; // добавляем значение на первое место
console.log(newArray);
console.log(oldArray);

const video=['youtube','vimeo','rutube'], 
    blogs=['wordpress', 'livejournal', 'blogger'],
    internet=[...video, ...blogs, 'vk', 'fb']; //троеточие спред, добавляет к массиву другой массив

console.log(internet);

function log(a,b,c){ // сюда можно передать 3 отдельных значения
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7]; // массив из трех значений
log(...num); // спредов в функцию лог, через запятую передали массив

const array = ["a","b"];
const newAarray =[...array];
const q = {
    one:1,
    two:2
};
const newObjects ={...q}; //копируем объект любой при помощи спред...
console.log(newObjects);