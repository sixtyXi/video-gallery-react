import React from 'react';

import styles from './MovieList.scss';
import { MovieThumb } from '../MovieThumb/MovieThumb';

export const MovieList = (props) => {
  return (
    <div className={styles.listWrapper}>
      {props.movies.map((movie) => <MovieThumb key={movie.id} movie={movie} />)}
    </div>
  );
};
