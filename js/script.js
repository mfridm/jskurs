"use strict";


let numberOfFilms;
let personalMovieDB={
    count:""
};

while(numberOfFilms==null || numberOfFilms=="" || numberOfFilms.length <= 10 ){
    numberOfFilms = prompt('Какой фильм любимый?','');
}



 personalMovieDB.count = prompt('Сколько фильмов глянул?','');
 
 if(personalMovieDB.count<10){
     alert("ну ты слабак");
 }else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
     alert("ну норм ты мужик");
 }else{
     alert("ты наркоман");
 }

//  do {
    
//     numberOfFilms = prompt('Какой фильм любимый?','');
    
// } while(numberOfFilms==null || numberOfFilms=="" || numberOfFilms.length >= 10 );

// while(numberOfFilms != '' && numberOfFilms.length =50) {
//     console.log(str.length);
// }

// do {
//     console.log(`${str.lenght}`);
    
// }
// while (numberOfFilms>=50);

// for (let i=1; i<0; i++){
//     if(numberOfFilms){
//         // break;
//         continue;
//     }
//     console.log(i);
    
// }