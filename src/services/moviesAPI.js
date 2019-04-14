const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies';

const createQuery = params => {
  const queries = [];
  const entries = Object.entries(params);

  entries.forEach(entry => {
    if (entry[1]) {
      queries.push(entry.join('='));
    }
  });

  return queries.length ? `?${queries.join('&')}` : '';
};

const mapMovie = movie => {
  return { ...movie, release_date: new Date(movie.release_date) };
};

const getMovies = (params = {}) => {
  const query = createQuery(params);

  return fetch(`${BASE_URL}${query}`)
    .then(res => res.json())
    .then(resData => resData.data)
    .then(movies => movies.map(mapMovie));
};

const getMovie = id => {
  return fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
    .then(mapMovie);
};

const getMoviesByGenre = genres => {
  const url = `${BASE_URL}?filter=${genres.join(',')}`;

  return fetch(url)
    .then(res => res.json())
    .then(resData => resData.data)
    .then(movies => movies.map(mapMovie));
};

export const moviesAPI = {
  getMovies,
  getMovie,
  getMoviesByGenre
};
