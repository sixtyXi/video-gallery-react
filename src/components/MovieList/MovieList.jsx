import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieList.scss';
import MovieThumbContainer from '../../containers/MovieThumbContainer/MovieThumbContainer';

export const MovieList = ({ movies }) => {
  return movies.length ? (
    <div className={styles.listWrapper}>
      {movies.map(movie => (
        <MovieThumbContainer key={movie.id} movie={movie} />
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
