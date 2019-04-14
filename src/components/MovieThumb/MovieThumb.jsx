import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieThumb.scss';
import { mapGenres } from '../../utils/utils';

export const MovieThumb = ({ movie, handleClick }) => {
  if (!movie) return null;

  const { genres = [], poster_path: posterPath, title, release_date: releaseDate } = movie;

  return (
    <article onClick={handleClick} data-cy="movieThumb" className={styles.wrapper}>
      <img className={styles.poster} src={posterPath} alt={`Poster of ${title}`} />
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <time className={styles.releaseDate}>{releaseDate.getFullYear()}</time>
      </div>
      <p className={styles.genre}>{mapGenres(genres)}</p>
    </article>
  );
};

MovieThumb.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.instanceOf(Date)
  }).isRequired,
  handleClick: PropTypes.func
};

MovieThumb.defaultProps = {
  handleClick: () => {}
};
