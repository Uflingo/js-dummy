'use strict';

let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt("how many films?", "");
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let i = 0;
    while (i < 2) {
        const lastFilm = prompt("last film?", ""),
            rating = prompt("rating", "");

        if (lastFilm != null && rating != null && rating !== '' && lastFilm.length > 0 && lastFilm.length < 50) {
            personalMovieDb.movies[lastFilm] = rating;
            i++;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("Мало");
    } else if (personalMovieDb.count < 30) {
        console.log("Классика");
    } else if (personalMovieDb.count >= 30) {
        console.log("киноман");
    } else {
        console.log("Ошибка");
    }
}

function showMyDb() {
    if (!personalMovieDb.privat) {
        console.log(personalMovieDb);
    }
}



function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = prompt("Ваш любимый жанр под номером " + (i+1), "");
        personalMovieDb.genres.push(genre);
    }
}

start();
rememberMyFilms();
detectPersonalLevel();
showMyDb();
writeYourGenres();
