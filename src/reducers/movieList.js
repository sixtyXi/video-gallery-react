import { SET_MOVIE_LIST, SET_SEARCH_BY, SET_SORT_BY, SET_SEARCH } from '../actions/actions';
import { SEARCH_FILTERS, SORT_FILTERS } from '../shared/filtersMock';

export const initialState = {
  movies: [],
  searchBy: SEARCH_FILTERS[0].value,
  sortBy: SORT_FILTERS[0].value,
  search: ''
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

    default:
      return state;
  }
};
