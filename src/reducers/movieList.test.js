import { movieList as reducer, initialState } from './movieList';
import { SET_MOVIE_LIST, SET_SEARCH_BY, SET_SORT_BY, SET_SEARCH } from '../actions/actions';
import { MOVIES } from '../shared/moviesMock';
import { SEARCH_FILTERS, SORT_FILTERS } from '../shared/filtersMock';

describe('movieList reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(initialState, {})).toMatchSnapshot();
  });

  test('should handle SET_MOVIE_LIST', () => {
    expect(
      reducer(initialState, {
        type: SET_MOVIE_LIST,
        payload: {
          movies: MOVIES
        }
      })
    ).toMatchSnapshot();
  });

  test('should handle SET_SEARCH_BY', () => {
    expect(
      reducer(initialState, {
        type: SET_SEARCH_BY,
        payload: {
          filterValue: SEARCH_FILTERS[1].value
        }
      })
    ).toMatchSnapshot();
  });

  test('should handle SET_SORT_BY', () => {
    expect(
      reducer(initialState, {
        type: SET_SORT_BY,
        payload: {
          filterValue: SORT_FILTERS[1].value
        }
      })
    ).toMatchSnapshot();
  });

  test('should handle SET_SEARCH', () => {
    const searchValue = 'cats';

    expect(
      reducer(initialState, {
        type: SET_SEARCH,
        payload: {
          searchValue
        }
      })
    ).toMatchSnapshot();
  });
});
