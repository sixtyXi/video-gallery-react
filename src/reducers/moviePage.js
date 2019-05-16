// @flow

import { SET_MOVIE, SET_MOVIES_BY_GENRE } from '../actions/actions';

import type { Movie } from '../shared/types';

export type MoviePageState = {
  movie: Movie | null,
  genres: Array<string>,
  movies: Array<Movie>
};

export const initialState: MoviePageState = {
  movie: null,
  genres: [],
  movies: []
};

export const moviePage = (state: MoviePageState = initialState, action: Function) => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        genres: action.payload.movie.genres
      };
    case SET_MOVIES_BY_GENRE:
      return {
        ...state,
        movies: action.payload.movies
      };

    default:
      return state;
  }
};
