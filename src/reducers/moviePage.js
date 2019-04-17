import { SET_MOVIE, SET_MOVIES_BY_GENRE } from '../actions/actions';

export const initialState = {
  movie: null,
  genres: [],
  movies: []
};

export const moviePage = (state = initialState, action) => {
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
