import { moviesAPI } from '../services/moviesAPI';

export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_MOVIE = 'SET_MOVIE';
export const SET_MOVIES_BY_GENRE = 'SET_MOVIES_BY_GENRE';

export const setMovieList = movies => {
  return {
    type: SET_MOVIE_LIST,
    payload: {
      movies
    }
  };
};

export const setMovie = movie => {
  return {
    type: SET_MOVIE,
    payload: {
      movie
    }
  };
};

export const setMoviesByGenre = movies => {
  return {
    type: SET_MOVIES_BY_GENRE,
    payload: {
      movies
    }
  };
};

export const fetchMovieList = () => (dispatch, getState) => {
  const { searchBy, sortBy, search } = getState().movieList;

  return moviesAPI
    .getMovies({ searchBy, sortBy, search })
    .then(movies => dispatch(setMovieList(movies)));
};

export const fetchMovieListByGenre = genres => dispatch => {
  return moviesAPI.getMoviesByGenre(genres).then(movies => {
    dispatch(setMoviesByGenre(movies));
  });
};

export const fetchMovie = id => dispatch => {
  return moviesAPI.getMovie(id).then(movie => dispatch(setMovie(movie)));
};

export const setSearchBy = filterValue => {
  return {
    type: SET_SEARCH_BY,
    payload: {
      filterValue
    }
  };
};

export const setSortBy = filterValue => {
  return {
    type: SET_SORT_BY,
    payload: {
      filterValue
    }
  };
};

export const setSearch = searchValue => {
  return {
    type: SET_SEARCH,
    payload: {
      searchValue
    }
  };
};
