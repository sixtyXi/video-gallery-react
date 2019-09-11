import configureMockStore from 'redux-mock-store';

import { MOVIES } from '../shared/moviesMock';
import { SEARCH_FILTERS, SORT_FILTERS } from '../shared/filtersMock';
import { initialState as movieList } from '../reducers/movieList';
import { initialState as movie } from '../reducers/moviePage';

import { setMovieList, setSearchBy, setSortBy, setSearch, setMovie } from './actions';

let mockStore;

let store;

const INITIAL_STATE = {
  movieList,
  movie
};

describe('actions', () => {
  mockStore = configureMockStore();

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
  });

  test('create SET_MOVIE_LIST', () => {
    store.dispatch(setMovieList(MOVIES));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('create SET_SEARCH_BY', () => {
    const newFilterValue = SEARCH_FILTERS[1].value;

    store.dispatch(setSearchBy(newFilterValue));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('create SET_SORT_BY', () => {
    const newFilterValue = SORT_FILTERS[1].value;

    store.dispatch(setSortBy(newFilterValue));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('create SET_SEARCH', () => {
    const newSearchTxt = 'cats';

    store.dispatch(setSearch(newSearchTxt));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('create SET_MOVIE', () => {
    store.dispatch(setMovie(MOVIES[0]));
    expect(store.getActions()).toMatchSnapshot();
  });
});
