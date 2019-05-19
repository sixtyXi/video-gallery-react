// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { IndexedCollection, Map } from 'immutable';

import { MovieList } from '../../components/MovieList/MovieList';
import { getSortedMoviesSelector } from '../../selectors';

type Props = {
  movies: IndexedCollection<Map<string, any>>
};

export const MovieListContainer = ({ movies }: Props) => {
  return <MovieList movies={movies} />;
};

const mapStateToProps = state => ({
  movies: getSortedMoviesSelector(state)
});

export default connect(mapStateToProps)(MovieListContainer);
