// @flow

import React from 'react';
import type { RecordOf, IndexedCollection } from 'immutable';

import type { Movie } from '../../shared/types';
import styles from './MovieList.scss';
import { MovieThumb } from '../MovieThumb/MovieThumb';

type Props = {
  movies: IndexedCollection<RecordOf<Movie>>
};

export const MovieList = ({ movies }: Props) => {
  return !movies.isEmpty() ? (
    <div className={styles.listWrapper}>
      {movies.map(movie => (
        <MovieThumb key={movie.get('id')} movie={movie} />
      ))}
    </div>
  ) : (
    <p className={styles.emptyResult}>No films found</p>
  );
};
