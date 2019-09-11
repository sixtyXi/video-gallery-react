import { createSelector, createStructuredSelector } from 'reselect';
import { SORT_FILTERS } from './shared/filtersMock';

const getMovies = state => state.getIn(['movieList', 'movies']);
const getMoviesQty = state => getMovies(state).size;
const getSortByFilter = state => state.getIn(['movieList', 'sortBy']);
const getSearchByFilter = state => state.getIn(['movieList', 'searchBy']);
const getSearchFilter = state => state.getIn(['movieList', 'search']);

const getSortedMovies = (movies, sortBy) => {
  switch (sortBy) {
    case SORT_FILTERS[0].value:
      return movies.sort(
        (firstMovie, secondMovie) =>
          new Date(secondMovie.get(SORT_FILTERS[0].value)) -
          new Date(firstMovie.get(SORT_FILTERS[0].value))
      );
    case SORT_FILTERS[1].value:
      return movies.sort(
        (firstMovie, secondMovie) =>
          secondMovie.get(SORT_FILTERS[1].value) - firstMovie.get(SORT_FILTERS[1].value)
      );

    default:
      return movies;
  }
};

export const getSortedMoviesSelector = createSelector(
  [getMovies, getSortByFilter],
  (movies, sortBy) => getSortedMovies(movies, sortBy)
);

export const getMoviesQtySelector = createSelector(
  getMoviesQty,
  qty => qty
);

export const getFiltersSelector = createStructuredSelector({
  search: getSearchFilter,
  searchBy: getSearchByFilter,
  sortBy: getSortByFilter
});

export const getSearchFilterSelector = createSelector(
  getSearchFilter,
  filterValue => filterValue
);

export const getSearchByFilterSelector = createSelector(
  getSearchByFilter,
  filterValue => filterValue
);

export const getSortByFilterSelector = createSelector(
  getSortByFilter,
  filterValue => filterValue
);

const getGenres = state => state.getIn(['moviePage', 'genres']);
const getMoviesByGenre = state => state.getIn(['moviePage', 'movies']);
const getMoviesByGenreQty = state => getMoviesByGenre(state).size;
const getMovie = state => state.getIn(['moviePage', 'movie']);
const getFilteredMoviesByGenre = (movies, movie) => {
  return movie ? movies.filter(el => el.get('id') !== movie.get('id')) : movies;
};

export const getGenresSelector = createSelector(
  getGenres,
  genres => genres
);

export const getMoviesByGenreQtySelector = createSelector(
  getMoviesByGenreQty,
  qty => qty
);

export const getMovieSelector = createSelector(
  getMovie,
  movie => movie
);

export const getFilteredMoviesByGenreSelector = createSelector(
  [getMoviesByGenre, getMovie],
  (movies, movie) => getFilteredMoviesByGenre(movies, movie)
);
