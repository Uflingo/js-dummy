const numberOfFilms = +prompt("how many films?", "");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
while (i < 2) {
    const lastFilm = prompt("last film?", ""),
        rating = prompt("rating", "");

    if (lastFilm != null && rating != null && rating !== '' && lastFilm.length > 0 && lastFilm.length < 50) {
        personalMovieDb.movies[lastFilm] = rating;
        i++;
    }
}

if (personalMovieDb.count < 10) {
    console.log("Мало");
} else if (personalMovieDb.count < 30) {
    console.log("Классика");
} else if (personalMovieDb.count >= 30) {
    console.log("киноман");
} else {
    console.log("Ошибка");
}



console.log(personalMovieDb);
