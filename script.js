"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы просмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Последний просмотренный фильм?', ''),
            b = +prompt('Оценка от 1 до 5', ''); //ввод числовых данных

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b >= 1 && b <= 5) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error data');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Нормально');
    } else if (personalMovieDB.count >= 30) {
        console.log('Хорошо');
    } else {
        console.log('Ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

//personalMovieDB.movies[a] = b; //хз куда это делось:)

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый фильм под номером ${i}`);
    }
}
writeYourGenres();