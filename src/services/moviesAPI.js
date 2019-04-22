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

const getMovies = (params = {}) => {
  const query = createQuery(params);

  return fetch(`${BASE_URL}${query}`)
    .then(res => res.json())
    .then(resData => resData.data);
};

const getMovie = id => {
  return fetch(`${BASE_URL}/${id}`).then(res => res.json());
};

const getMoviesByGenre = genres => {
  const url = `${BASE_URL}?filter=${genres.join(',')}`;

  return fetch(url)
    .then(res => res.json())
    .then(resData => resData.data);
};

export const moviesAPI = {
  getMovies,
  getMovie,
  getMoviesByGenre
};
