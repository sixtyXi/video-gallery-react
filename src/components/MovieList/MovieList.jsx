import React from 'react';

import styles from './MovieList.scss';
import { MovieThumb } from '../MovieThumb/MovieThumb';

export const MovieList = ({ movies = [] }) => {
  return movies.length ? (
    <div className={styles.listWrapper}>
      {movies.map(movie => (
        <MovieThumb key={movie.id} movie={movie} />
      ))}
    </div>
  ) : (
    <p>No results found</p>
  );
};
