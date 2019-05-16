// @flow

export type Movie = {
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
