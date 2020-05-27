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

console.log(personalMovieDB);

