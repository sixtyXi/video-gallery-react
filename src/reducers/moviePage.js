// @flow

import { SET_MOVIE, SET_MOVIES_BY_GENRE } from '../actions/actions';
import { fromJS } from 'immutable';
import type { IndexedCollection, Map } from 'immutable';

export type MoviePageState = {
  movie: Map<string, any> | null,
  genres: IndexedCollection<string>,
  movies: IndexedCollection<Map<string, any>>
};

export const initialState: MoviePageState = fromJS({
  movie: null,
  genres: [],
  movies: []
});

export const moviePage = (state: MoviePageState = initialState, action: Function) => {
  switch (action.type) {
    case SET_MOVIE:
      return state
        .setIn(['movie'], fromJS(action.payload.movie))
        .setIn(['genres'], fromJS(action.payload.movie.genres));
    case SET_MOVIES_BY_GENRE:
      return state.setIn(['movies'], fromJS(action.payload.movies));

    default:
      return state;
  }
};
