// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { IndexedCollection, RecordOf } from 'immutable';

import type { Movie } from '../../../shared/types';
import { MovieList } from '../../../components/MovieList/MovieList';
import { getFilteredMoviesByGenreSelector } from '../../../selectors';

type Props = {
  movies: IndexedCollection<RecordOf<Movie>>
};

export class MoviesByGenreContainer extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    const { movies } = this.props;
    const { movies: nextMovies } = nextProps;

    return movies.toString() !== nextMovies.toString();
  }

  render() {
    const { movies } = this.props;

    return <MovieList movies={movies} />;
  }
}

const mapStateToProps = state => ({
  movies: getFilteredMoviesByGenreSelector(state)
});

export default connect(mapStateToProps)(MoviesByGenreContainer);
