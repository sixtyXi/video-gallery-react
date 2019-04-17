import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import fetch from 'isomorphic-fetch';

import { MOVIES } from '../shared/moviesMock';
import { SEARCH_FILTERS, SORT_FILTERS } from '../shared/filtersMock';

import {
  setMovieList,
  setSearchBy,
  setSortBy,
  setSearch,
  setMovie,
  fetchMovieList,
  fetchMovie
} from './actions';

let mockStore;
let store;

const BASE_URL = 'https://localhost:8000';
const INITIAL_STATE = {
  movieList: {
    movies: [],
    searchBy: SEARCH_FILTERS[0].value,
    sortBy: SORT_FILTERS[0].value,
    search: ''
  },
  movie: {
    movie: null,
    genres: [],
    movies: []
  }
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

describe('async actions', () => {
  const middlewares = [thunk];

  mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('create SET_MOVIE_LIST when fetching has been done', () => {
    nock(BASE_URL)
      .get('/movies')
      .reply(200, MOVIES);

    return store.dispatch(fetchMovieList()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  test('create SET_MOVIE when fetching has been done', () => {
    const id = MOVIES[0].id;
    const movie = MOVIES[0];

    nock(BASE_URL)
      .get(`/movies/${id}`)
      .reply(200, movie);

    return store.dispatch(fetchMovie(id)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
