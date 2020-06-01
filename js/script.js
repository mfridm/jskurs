"use strict";

<<<<<<< 5710852d928f6691d7ac3ef4f3594f6b64ace58b
const options= {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        background: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};

options.makeTest();

const {border, background} = options.colors;
console.log(options.colors);

// console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

//delete options.name; //удаление ключа

// console.log(options);
// let counter =0;
// for(let key in options){
//     if(typeof(options[key]) === 'object'){ //проверяем есть ли объекты в объекте
//         for (let i in options[key]){ //если есть объекты внутри то выводим все их содержимое
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++; // два уровня погружения. ки обращается к ключам подряд, и обращается ко второму уровню глубины
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
=======
const arr=[2,13,26,8,10];
arr.sort(compareNum);
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
>>>>>>> Lection 21 массивы,псевдомассивы,сортировка
// }
// console.log(counter);


