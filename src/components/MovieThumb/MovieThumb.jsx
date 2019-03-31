import React from 'react';

import styles from './MovieThumb.scss';

const mapGenres = genres => {
  return genres.map(genre => genre.replace(/^./, genre[0].toUpperCase())).join(' & ');
};

export const MovieThumb = ({ movie }) => {
  if (!movie) return null;

  const { genres = [], poster_path: posterPath, title, release_date: releaseDate } = movie;

  return (
    <article className={styles.wrapper}>
      <img className={styles.poster} src={posterPath} alt={`Poster of ${title}`} />
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <time className={styles.releaseDate}>{releaseDate}</time>
      </div>
      <p className={styles.genre}>{mapGenres(genres)}</p>
    </article>
  );
};
