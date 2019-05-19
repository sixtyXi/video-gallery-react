// @flow

import { fromJS } from 'immutable';
import type { IndexedCollection, Map } from 'immutable';

import {
  SET_MOVIE_LIST,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_SEARCH,
  SET_INITIAL_STATE
} from '../actions/actions';
import { DEFAULT_FILTERS } from '../shared/filtersMock';

import type { MovieFilters } from '../shared/types';

export type MovieListState = MovieFilters & {
  movies: IndexedCollection<Map<string, any>>
};

export const initialState: MovieListState = fromJS({
  movies: [],
  ...DEFAULT_FILTERS
});

export const movieList = (state: MovieListState = initialState, action: Function) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return state.setIn(['movies'], fromJS(action.payload.movies));
    case SET_SEARCH_BY:
      return state.setIn(['searchBy'], action.payload.filterValue);
    case SET_SORT_BY:
      return state.setIn(['sortBy'], action.payload.filterValue);
    case SET_SEARCH:
      return state.setIn(['search'], action.payload.searchValue);
    case SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};
