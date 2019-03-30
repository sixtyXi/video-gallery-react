import React from 'react';

import styles from './MovieCard.scss';

export const MovieCard = (props) => {
  const movie = props.movie;

  return (
    <article className={styles.wrapper}>
      <img className={styles.poster} src={movie.poster_path} alt={`Poster of ${movie.title}`} />
      <div className={styles.descWrapper}>
        <h1 className={styles.title} data-rate={movie.vote_average}>
          {movie.title}
        </h1>
        <p>{movie.tagline}</p>
        <time className={styles.releaseDate}>{movie.release_date}</time>
        <p className={styles.runtime}>{`${movie.runtime} min`}</p>
        <p>{movie.overview}</p>
      </div>
    </article>
  );
};
