"use strict";

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
    
// }
// console.log(counter);


