// @flow

import React from 'react';

import styles from './MovieCard.scss';

import type { Movie } from '../../../shared/types';

export const MovieCard = ({ movie }: { movie: Movie }) => {
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
