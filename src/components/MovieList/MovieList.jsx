// @flow

import React from 'react';

import styles from './MovieList.scss';
import { MovieThumb } from '../MovieThumb/MovieThumb';
import type { Movie } from '../../shared/types';

export const MovieList = ({ movies }: { movies: Array<Movie> }) => {
  return movies.length ? (
    <div className={styles.listWrapper}>
      {movies.map(movie => (
        <MovieThumb key={movie.id} movie={movie} />
      ))}
    </div>
  ) : (
    <p className={styles.emptyResult}>No films found</p>
  );
};

MovieList.defaultProps = {
  movies: []
};
