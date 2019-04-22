import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  return (
    <article className={styles.wrapper}>
      <img className={styles.poster} src={movie.poster_path} alt={`Poster of ${movie.title}`} />
      <div className={styles.descWrapper}>
        <h1 className={styles.title} data-rate={movie.vote_average}>
          {movie.title}
        </h1>
        <p>{movie.tagline}</p>
        <time className={styles.releaseDate}>{new Date(movie.release_date).getFullYear()}</time>
        <p className={styles.runtime}>{`${movie.runtime} min`}</p>
        <p>{movie.overview}</p>
      </div>
    </article>
  );
};

MovieCard.propTypes = PropTypes.shape({
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
}).isRequired;
