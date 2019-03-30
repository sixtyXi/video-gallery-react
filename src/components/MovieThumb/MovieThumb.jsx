import React from 'react';

import styles from './MovieThumb.scss';

export const MovieThumb = (props) => {
  const movie = props.movie;
  const genres = mapGenres(movie.genres);

  return (
    <article className={styles.wrapper}>
      <img className={styles.poster} src={movie.poster_path} alt={`Poster of ${movie.title}`} />
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{movie.title}</h2>
        <time className={styles.releaseDate}>{movie.release_date}</time>
      </div>
      <p className={styles.genre}>{genres}</p>
    </article>
  );
};

const mapGenres = (genres) => {
  return genres.map((genre) => genre.replace(/^./, genre[0].toUpperCase())).join(' & ');
};
