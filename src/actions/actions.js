import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { moviesAPI } from '../services/moviesAPI';

export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_MOVIE_PAGE_STATE = 'SET_MOVIE_PAGE_STATE';
export const SET_MOVIES_BY_GENRE = 'SET_MOVIES_BY_GENRE';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST';
export const FETCH_MOVIE_LIST_BY_GENRE = 'FETCH_MOVIE_LIST_BY_GENRE';
export const FETCH_MOVIE_PAGE = 'FETCH_MOVIE_PAGE';

export const setMovieList = movies => {
  return {
    type: SET_MOVIE_LIST,
    payload: {
      movies
    }
  };
};

export const setMovie = (movie, genres, movies) => {
  return {
    type: SET_MOVIE_PAGE_STATE,
    payload: {
      movie,
      genres,
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

export const fetchMoviePage = id => {
  return {
    type: FETCH_MOVIE_PAGE,
    payload: id
  };
};

// Sagas
export function* fetchMovieListAsync() {
  const movieListState = yield select(state => state.get('movieList'));
  const searchBy = movieListState.get('searchBy');
  const sortBy = movieListState.get('sortBy');
  const search = movieListState.get('search');
  const movies = yield call([moviesAPI, 'getMovies'], { searchBy, sortBy, search });

  yield put(setMovieList(movies));
}

export function* watchFetchMovieList() {
  yield takeLatest(FETCH_MOVIE_LIST, fetchMovieListAsync);
}

export function* fetchMoviePageAsync(action) {
  const movie = yield call([moviesAPI, 'getMovie'], action.payload);
  const movies = yield call([moviesAPI, 'getMoviesByGenre'], movie.genres);

  yield put(setMovie(movie, movie.genres, movies));
}

export function* watchFetchMoviePage() {
  yield takeLatest(FETCH_MOVIE_PAGE, fetchMoviePageAsync);
}

// Movies Saga
export function* moviesSaga() {
  yield all([watchFetchMovieList(), watchFetchMoviePage()]);
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
