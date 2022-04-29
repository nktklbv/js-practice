"use strict";

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function () {
            personalMovieDB.count = +prompt('Сколько фильмов Вы просмотрели?', '');

            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов Вы просмотрели?', '');
            }
        },
        rememberMyFilms: function () {
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
            },
        detectPersonalLevel: function () {
            if (personalMovieDB.count < 10) {
                console.log('Мало');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Нормально');
            } else if (personalMovieDB.count >= 30) {
                console.log('Хорошо');
            } else {
                console.log('Ошибка');
            }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
            console.log(personalMovieDB);
            }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый фильм под номером ${i}`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};