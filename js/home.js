let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

  while (
    numberOfFilms == " " ||
    numberOfFilms == null ||
    numberOfFilms == isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
  }
}

start();

const personalMovieDB = {
  count_films: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    (a = prompt("Один из последних просмотренных фильмов?", " ")),
      (b = prompt("На сколько оцените его?", " "));

    if (a != null && b != null && a != " " && b != " " && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Я успешнно отработал !");
    } else {
      console.log("error!!!");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count_films < 10) {
    console.log("Просмотренно мало фильмов");
  } else if (
    personalMovieDB.count_films >= 10 &&
    personalMovieDB.count_films < 30
  ) {
    console.log("Вы классичекий зритель");
  } else if (personalMovieDB.count_films >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Ошибка вы не смотрите фильмы");
  }
}

detectPersonalLevel();
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      " "
    );
  }
}

writeYourGenres();
