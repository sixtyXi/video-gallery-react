// @flow

import React from 'react';
import type { RecordOf } from 'immutable';
import type { Movie } from '../../../shared/types';

import styles from './MovieCard.scss';

export const MovieCard = ({ movie }: { movie: RecordOf<Movie> }) => {
  return (
    <article className={styles.wrapper}>
      <img
        className={styles.poster}
        src={movie.get('poster_path')}
        alt={`Poster of ${movie.get('title')}`}
      />
      <div className={styles.descWrapper}>
        <h1 className={styles.title} data-rate={movie.get('vote_average')}>
          {movie.get('title')}
        </h1>
        <p>{movie.get('tagline')}</p>
        <time className={styles.releaseDate}>
          {new Date(movie.get('release_date')).getFullYear()}
        </time>
        <p className={styles.runtime}>{`${movie.get('runtime')} min`}</p>
        <p>{movie.get('overview')}</p>
      </div>
    </article>
  );
};
