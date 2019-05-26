// @flow

import { combineReducers } from 'redux-immutable';
import { all } from 'redux-saga/effects';

import type { Saga } from 'redux-saga';
import type { MoviePageState } from './moviePage';
import type { MovieListState } from './movieList';
import { moviePage } from './moviePage';
import { movieList } from './movieList';
import { moviesSaga } from '../actions/actions';

export type State = {
  moviePage: MoviePageState,
  movieList: MovieListState
};

const rootReducer = combineReducers({ moviePage, movieList });

function* rootSaga(): Saga<void> {
  yield all([moviesSaga()]);
}

export { rootReducer, rootSaga };
