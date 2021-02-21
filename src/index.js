'use strict';

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
        let i = 0;
        while (i < 2) {
            const lastFilm = prompt("last film?", ""),
                rating = prompt("rating", "");

            if (lastFilm != null && rating != null && rating !== '' && lastFilm.length > 0 && lastFilm.length < 50) {
                personalMovieDb.movies[lastFilm] = rating;
                i++;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDb.count < 10) {
            console.log("Мало");
        } else if (personalMovieDb.count < 30) {
            console.log("Классика");
        } else if (personalMovieDb.count >= 30) {
            console.log("киноман");
        } else {
            console.log("Ошибка");
        }
    },
    showMyDb: function() {
        if (!personalMovieDb.privat) {
            console.log(personalMovieDb);
        }
    },
    writeYourGenres: function() {
        let i = 0;
        do {
            let genre = prompt("Ваш любимый жанр под номером " + (i+1), "");
            if (genre != "" && genre != null) {
                personalMovieDb.genres.push(genre);
                i++;
            }
        } while (i < 3);
        this.genres.forEach((item, j) =>
            console.log(`Любимый жанр ${j + 1} - это ${item}`));
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },
    start: function() {
        let numberOfFilms;
        do {
            numberOfFilms = +prompt("how many films?", "");
        } while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms));
        this.count = numberOfFilms;
    }
};
