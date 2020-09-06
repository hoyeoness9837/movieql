let movies = [
  {
    id: 0,
    name: "Movie A",
    score: 4,
  },
  {
    id: 1,
    name: "Movie B",
    score: 3,
  },
  {
    id: 2,
    name: "Movie C",
    score: 5,
  },
  {
    id: 3,
    name: "Movie D",
    score: 4,
  },
  {
    id: 4,
    name: "Movie E",
    score: 5,
  },
];

export const getMovies = () => {
  return movies;
};

export const getById = (id) => {
  const filteredMovie = movies.filter((movie) => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = (id) => {
  const clearedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > clearedMovies.length) {
    movies = clearedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
