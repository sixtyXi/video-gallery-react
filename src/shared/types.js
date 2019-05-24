// @flow
import type { RecordFactory, RecordOf } from 'immutable';
import { Record } from 'immutable';

type MovieProps = {
  id: string | number,
  poster_path: string,
  title: string,
  genres: Array<string>,
  release_date: string,
  vote_average: number,
  tagline: string,
  runtime: number,
  overview: string
};

const defaultValuesMovie: MovieProps = {
  id: '',
  poster_path: '',
  title: '',
  genres: [],
  release_date: '',
  vote_average: 0,
  tagline: '',
  runtime: 0,
  overview: ''
};

export type Movie = RecordOf<MovieProps>;

export const makeMovie: RecordFactory<Movie> = Record(defaultValuesMovie);

export type Filter = {
  value: string,
  title: string
};

export type MovieFilters = {
  searchBy: string,
  sortBy: string,
  search: string
};

export type Location = {
  search: string,
  pathname: string
};
