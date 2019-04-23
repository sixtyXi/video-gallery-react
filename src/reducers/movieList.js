import {
  SET_MOVIE_LIST,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_SEARCH,
  SET_INITIAL_STATE
} from '../actions/actions';
import { DEFAULT_FILTERS } from '../shared/filtersMock';

export const initialState = {
  movies: [],
  ...DEFAULT_FILTERS
};

export const movieList = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return {
        ...state,
        movies: action.payload.movies
      };
    case SET_SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload.filterValue
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload.filterValue
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload.searchValue
      };
    case SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};
