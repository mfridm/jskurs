"use strict";

function first(){
    //вывод с задержкой
    setTimeout(function(){
        console.log(1);
    }, 500);
}



function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`я учу: ${lang}`);
    callback();
}

function done(){
    
    console.log('я прошел этот урок');
}

learnJS('JavaScript', done); // передаем 1 аргумент текстом, второй всю функцию