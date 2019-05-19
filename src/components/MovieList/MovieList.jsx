// @flow

import React from 'react';
import type { IndexedCollection, Map } from 'immutable';

import styles from './MovieList.scss';
import { MovieThumb } from '../MovieThumb/MovieThumb';

export const MovieList = ({ movies }: { movies: IndexedCollection<Map<string, any>> }) => {
  return movies.size ? (
    <div className={styles.listWrapper}>
      {movies.map(movie => (
        <MovieThumb key={movie.get('id')} movie={movie} />
      ))}
    </div>
  ) : (
    <p className={styles.emptyResult}>No films found</p>
  );
};

MovieList.defaultProps = {
  movies: []
};
