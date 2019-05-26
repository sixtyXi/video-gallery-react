// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { RecordOf } from 'immutable';

import type { Movie } from '../../shared/types';
import styles from './MovieThumb.scss';
import { mapGenres } from '../../utils/utils';

export const MovieThumb = ({ movie }: { movie: RecordOf<Movie> }) => {
  if (!movie) return null;

  return (
    <Link to={`/film/${movie.get('id')}`} style={{ textDecoration: 'none' }}>
      <article data-cy="movieThumb" className={styles.wrapper}>
        <img
          className={styles.poster}
          src={movie.get('poster_path')}
          alt={`Poster of ${movie.get('title')}`}
        />
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{movie.get('title')}</h2>
          <time className={styles.releaseDate}>
            {new Date(movie.get('release_date')).getFullYear()}
          </time>
        </div>
        <p className={styles.genre}>{mapGenres(movie.get('genres'))}</p>
      </article>
    </Link>
  );
};
