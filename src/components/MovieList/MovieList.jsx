import React from 'react';

import styles from './MovieList.scss';
import { MovieThumb } from '../MovieThumb/MovieThumb';

export const MovieList = ({ movies }) => {
  return (
    <div className={styles.listWrapper}>
      {movies.map(movie => (
        <MovieThumb key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
