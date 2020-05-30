"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели','');


let personalMovieDB ={
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};

const a = prompt('Последний фильм смотрел какой?',''),
b = prompt('Какая оценка?',''),
c = prompt('Последний фильм смотрел какой?',''),
d = prompt('Какая оценка?','');


personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

function showMyDB(){
   if(personalMovieDB.privat==false) {
    console.log(personalMovieDB);
   }else{
    console.log("Huj Tam TRUE");
   }
    
}

showMyDB();

let arr=[];
let MyQuestion;
function writeYourGenres(){
    for(let i=1;i<4;i++){
        MyQuestion=prompt('укажи свой любимый жанр','');
        arr.push(MyQuestion);
    }
    console.log(arr);
}

writeYourGenres();

// function calc(a,b){
//     return(a+b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// function ret(){
//     let num=50;
//     return num;
// }

// const anotherNum= ret();
// console.log(anotherNum);

// const logger = function(){
// console.log("Hello")
// };
// logger();

// const calc=(a,b)=>a+b;
