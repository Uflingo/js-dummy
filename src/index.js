const numberOfFilms = +prompt("how many films?", "");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("last film?", ""),
        rating = prompt("rating", "");

    personalMovieDb.movies[lastFilm] = rating;
}


console.log(personalMovieDb);
