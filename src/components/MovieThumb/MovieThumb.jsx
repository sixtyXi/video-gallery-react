// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieThumb.scss';
import { mapGenres } from '../../utils/utils';
import type { Movie } from '../../shared/types';

export const MovieThumb = ({ movie }: { movie: Movie }) => {
  if (!movie) return null;

  const { genres, poster_path: posterPath, title, release_date: releaseDate, id } = movie;

  return (
    <Link to={`/film/${id}`} style={{ textDecoration: 'none' }}>
      <article data-cy="movieThumb" className={styles.wrapper}>
        <img className={styles.poster} src={posterPath} alt={`Poster of ${title}`} />
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <time className={styles.releaseDate}>{new Date(releaseDate).getFullYear()}</time>
        </div>
        <p className={styles.genre}>{mapGenres(genres)}</p>
      </article>
    </Link>
  );
};

MovieThumb.defaultProps = {
  movie: {
    genres: []
  }
};
