import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { moviePage } from './moviePage';
import { movieList } from './movieList';
import { moviesSaga } from '../actions/actions';

const rootReducer = combineReducers({ moviePage, movieList });

function* rootSaga() {
  yield all([moviesSaga()]);
}

export { rootReducer, rootSaga };
