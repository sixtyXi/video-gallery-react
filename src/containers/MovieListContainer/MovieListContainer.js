// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MovieList } from '../../components/MovieList/MovieList';
import { SORT_FILTERS } from '../../shared/filtersMock';
import type { Movie } from '../../shared/types';

type Props = {
  movies: Array<Movie>,
  sortBy: string
};

export class MovieListContainer extends Component<Props> {
  static defaultProps = {
    movies: []
  };

  getSortedMovies = (): Array<Movie> => {
    const { movies, sortBy } = this.props;

    switch (sortBy) {
      case SORT_FILTERS[0].value:
      case SORT_FILTERS[1].value:
        return movies
          .slice(0)
          .sort((firstMovie, secondMovie) => secondMovie[sortBy] - firstMovie[sortBy]);

      default:
        return movies;
    }
  };

  render() {
    return <MovieList movies={this.getSortedMovies()} />;
  }
}

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  sortBy: state.movieList.sortBy
});

export default connect(mapStateToProps)(MovieListContainer);
