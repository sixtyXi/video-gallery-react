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
    <p>No results found</p>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

MovieList.defaultProps = {
  movies: []
};
