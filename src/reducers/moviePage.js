// @flow

import { Record, List } from 'immutable';
import type { RecordOf, RecordFactory, IndexedCollection } from 'immutable';

import { type Movie, makeMovie } from '../shared/types';
import { SET_MOVIE_PAGE_STATE } from '../actions/actions';

type MoviePageStateProps = {
  movie: RecordOf<Movie> | null,
  genres: IndexedCollection<string>,
  movies: IndexedCollection<RecordOf<Movie>>
};

export type MoviePageState = RecordOf<MoviePageStateProps>;

export const makeMoviePageState: RecordFactory<MoviePageState> = Record({
  movie: null,
  genres: List(),
  movies: List()
});

export const moviePage = (
  state: RecordOf<MoviePageState> = makeMoviePageState(),
  action: Function
) => {
  switch (action.type) {
    case SET_MOVIE_PAGE_STATE:
      return state
        .setIn(['movie'], makeMovie(action.payload.movie))
        .setIn(['genres'], List(action.payload.movie.genres))
        .setIn(['movies'], List(action.payload.movies.map(makeMovie)));
    default:
      return state;
  }
};
