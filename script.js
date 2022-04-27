"use strict";
const numberOfFilms = +prompt('Сколько фильмов Вы просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Последний просмотренный фильм?', ''),
          b = +prompt('Оценка от 1 до 5', '');

if (a != null && b != null && a != '' && b != '' && a.length < 50 && b >= 1 && b <= 5) {
    personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    console.log('error data');
    i--;
}

if (personalMovieDB.count < 10) {
    console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Нормально');
    } else if (personalMovieDB.count >= 30) {
        console.log('Хорошо');
    } else {
        console.log('Ошибка');
    }

    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);