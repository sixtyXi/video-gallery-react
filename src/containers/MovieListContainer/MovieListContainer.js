// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { IndexedCollection, Map } from 'immutable';

import { MovieList } from '../../components/MovieList/MovieList';
import { SORT_FILTERS } from '../../shared/filtersMock';

type Props = {
  movies: IndexedCollection<Map<string, any>>,
  sortBy: string
};

export class MovieListContainer extends Component<Props> {
  static defaultProps = {
    movies: []
  };

  getSortedMovies = (): IndexedCollection<Map<string, any>> => {
    const { movies, sortBy } = this.props;

    switch (sortBy) {
      case SORT_FILTERS[0].value:
        return movies.sort(
          (firstMovie, secondMovie) =>
            new Date(secondMovie.get(SORT_FILTERS[0].value)) -
            new Date(firstMovie.get(SORT_FILTERS[0].value))
        );
      case SORT_FILTERS[1].value:
        return movies.sort(
          (firstMovie, secondMovie) =>
            secondMovie.get(SORT_FILTERS[1].value) - firstMovie.get(SORT_FILTERS[1].value)
        );

      default:
        return movies;
    }
  };

  render() {
    return <MovieList movies={this.getSortedMovies()} />;
  }
}

const mapStateToProps = state => ({
  movies: state.getIn(['movieList', 'movies']),
  sortBy: state.getIn(['movieList', 'sortBy'])
});

export default connect(mapStateToProps)(MovieListContainer);
