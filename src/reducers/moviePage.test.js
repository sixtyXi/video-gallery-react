import { moviePage as reducer, initialState } from './moviePage';
import { SET_MOVIE } from '../actions/actions';
import { MOVIES } from '../shared/moviesMock';

describe('moviePage reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(initialState, {})).toMatchSnapshot();
  });

  test('should handle SET_MOVIE', () => {
    const movie = MOVIES[0];

    expect(
      reducer(initialState, {
        type: SET_MOVIE,
        payload: {
          movie
        }
      })
    ).toMatchSnapshot();
  });
});
