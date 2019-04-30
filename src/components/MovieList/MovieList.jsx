import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieList.scss';
import { MovieThumb } from '../MovieThumb/MovieThumb';

export const MovieList = ({ movies }) => {
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

MovieList.defaultProps = {
  movies: []
};
