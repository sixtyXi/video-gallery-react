// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { List, Map } from 'immutable';

import { rootReducer, rootSaga } from './reducers/rootReducer';
import type { State } from './reducers/rootReducer';
import { makeMovie } from './shared/types';
import { makeMoviePageState } from './reducers/moviePage';
import { makeMovieListState } from './reducers/movieList';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();

export type Store = {
  dispatch: Function,
  getState: Function
};

const mapPreloadedState = state => {
  if (!state) return Map();

  const { moviePage, movieList } = state;

  const moviePageStateValues = {
    movie: moviePage.movie ? makeMovie(moviePage.movie) : null,
    genres: List(moviePage.genres),
    movies: List(moviePage.movies.map(makeMovie))
  };

  const movieListPageStateValues = {
    movies: List(movieList.movies.map(makeMovie)),
    searchBy: movieList.searchBy,
    sortBy: movieList.sortBy,
    search: movieList.search
  };

  const mappedState = {
    moviePage: makeMoviePageState(moviePageStateValues),
    movieList: makeMovieListState(movieListPageStateValues)
  };

  return Map(mappedState);
};

export default (initialState: State) => {
  const store = createStore(
    rootReducer,
    mapPreloadedState(initialState),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
};
