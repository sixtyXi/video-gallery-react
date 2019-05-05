import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { moviesAPI } from '../services/moviesAPI';

export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_MOVIE = 'SET_MOVIE';
export const SET_MOVIES_BY_GENRE = 'SET_MOVIES_BY_GENRE';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST';
export const FETCH_MOVIE_LIST_BY_GENRE = 'FETCH_MOVIE_LIST_BY_GENRE';
export const FETCH_MOVIE = 'FETCH_MOVIE';

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

export const setInitialState = () => {
  return {
    type: SET_INITIAL_STATE
  };
};

export const fetchMovieList = () => {
  return {
    type: FETCH_MOVIE_LIST
  };
};

export const fetchMovieListByGenre = genres => {
  return {
    type: FETCH_MOVIE_LIST_BY_GENRE,
    payload: genres
  };
};

export const fetchMovie = id => {
  return {
    type: FETCH_MOVIE,
    payload: id
  };
};

// Sagas
export function* fetchMovieListAsync() {
  const { searchBy, sortBy, search } = yield select(state => state.movieList);
  const movies = yield call([moviesAPI, 'getMovies'], { searchBy, sortBy, search });

  yield put(setMovieList(movies));
}

export function* watchFetchMovieList() {
  yield takeLatest(FETCH_MOVIE_LIST, fetchMovieListAsync);
}

export function* fetchMovieListByGenreAsync(action) {
  const movies = yield call([moviesAPI, 'getMoviesByGenre'], action.payload);

  yield put(setMoviesByGenre(movies));
}

export function* watchFetchMovieListByGenre() {
  yield takeLatest(FETCH_MOVIE_LIST_BY_GENRE, fetchMovieListByGenreAsync);
}

export function* fetchMovieAsync(action) {
  const movie = yield call([moviesAPI, 'getMovie'], action.payload);

  yield put(setMovie(movie));
}

export function* watchFetchMovie() {
  yield takeLatest(FETCH_MOVIE, fetchMovieAsync);
}

// Movies Saga
export function* moviesSaga() {
  yield all([watchFetchMovieList(), watchFetchMovieListByGenre(), watchFetchMovie()]);
}

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
