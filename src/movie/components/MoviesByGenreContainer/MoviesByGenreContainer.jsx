// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { IndexedCollection, Map } from 'immutable';

import { MovieList } from '../../../components/MovieList/MovieList';
import { fetchMovieListByGenre } from '../../../actions/actions';
import {
  getMovieSelector,
  getFilteredMoviesByGenreSelector,
  getGenresSelector
} from '../../../selectors';

const mapMoviesToComparableString = (movies: IndexedCollection<Map<string, any>>) => {
  const ids = movies.map(movie => +movie.get('id'));

  return ids.sort((first, second) => first - second).join();
};

const isEqualMovies = (list1, list2) => {
  if (list1.size !== list2.size) return false;

  const first = mapMoviesToComparableString(list1);
  const second = mapMoviesToComparableString(list2);

  return first === second;
};

type Props = {
  movies: IndexedCollection<Map<string, any>>,
  genres: IndexedCollection<string>,
  movie: Map<string, any>,
  getMoviesByGenre: Function
};

export class MoviesByGenreContainer extends Component<Props> {
  componentWillMount() {
    const { genres, getMoviesByGenre } = this.props;

    getMoviesByGenre(genres);
  }

  shouldComponentUpdate(nextProps: Props) {
    const { movies, movie, getMoviesByGenre } = this.props;
    const { movies: nextMovies, movie: nextMovie } = nextProps;

    const movieId = movie ? movie.get('id') : null;
    const nextMovieId = nextMovie ? nextMovie.get('id') : null;

    if (movieId !== nextMovieId) {
      getMoviesByGenre(nextProps.genres);
    }

    return !isEqualMovies(movies, nextMovies);
  }

  render() {
    const { movies } = this.props;

    return <MovieList movies={movies} />;
  }
}

const mapStateToProps = state => ({
  movies: getFilteredMoviesByGenreSelector(state),
  genres: getGenresSelector(state),
  movie: getMovieSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genres => dispatch(fetchMovieListByGenre(genres))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesByGenreContainer);
