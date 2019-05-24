// @flow

import { Record, List } from 'immutable';
import type { RecordOf, RecordFactory, IndexedCollection } from 'immutable';

import { type Movie, type MovieFilters, makeMovie } from '../shared/types';

import {
  SET_MOVIE_LIST,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_SEARCH,
  SET_INITIAL_STATE
} from '../actions/actions';
import { DEFAULT_FILTERS } from '../shared/filtersMock';

type MovieListStateProps = MovieFilters & {
  movies: IndexedCollection<RecordOf<Movie>>
};

export type MovieListState = RecordOf<MovieListStateProps>;

export const makeMovieListState: RecordFactory<MovieListState> = Record({
  movies: List(),
  ...DEFAULT_FILTERS
});

export const movieList = (
  state: RecordOf<MovieListState> = makeMovieListState(),
  action: Function
) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return state.setIn(['movies'], List(action.payload.movies.map(makeMovie)));
    case SET_SEARCH_BY:
      return state.setIn(['searchBy'], action.payload.filterValue);
    case SET_SORT_BY:
      return state.setIn(['sortBy'], action.payload.filterValue);
    case SET_SEARCH:
      return state.setIn(['search'], action.payload.searchValue);
    case SET_INITIAL_STATE:
      return makeMovieListState();
    default:
      return state;
  }
};
