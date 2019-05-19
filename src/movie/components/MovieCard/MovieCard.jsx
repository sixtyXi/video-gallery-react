// @flow

import React from 'react';
import type { Movie } from '../../../shared/types';

import styles from './MovieCard.scss';

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const {
    poster_path: posterPath,
    title,
    vote_average: voteAverage,
    tagline,
    release_date: releaseDate,
    runtime,
    overview
  } = movie;

  return (
    <article className={styles.wrapper}>
      <img className={styles.poster} src={posterPath} alt={`Poster of ${title}`} />
      <div className={styles.descWrapper}>
        <h1 className={styles.title} data-rate={voteAverage}>
          {title}
        </h1>
        <p>{tagline}</p>
        <time className={styles.releaseDate}>{new Date(releaseDate).getFullYear()}</time>
        <p className={styles.runtime}>{`${runtime} min`}</p>
        <p>{overview}</p>
      </div>
    </article>
  );
};
