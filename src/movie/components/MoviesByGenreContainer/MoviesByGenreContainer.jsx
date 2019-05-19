// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { IndexedCollection, Map } from 'immutable';

import { MovieList } from '../../../components/MovieList/MovieList';
import { fetchMovieListByGenre } from '../../../actions/actions';

const isEqualGenre = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  return arr1.sort().join() === arr2.sort().join();
};

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

    const shouldUpdate = !isEqualMovies(
      this.getFilteredMovies(movies, movie),
      this.getFilteredMovies(nextMovies, nextMovie)
    );

    return shouldUpdate;
  }

  getFilteredMovies = (
    movies: IndexedCollection<Map<string, any>>,
    movie: Map<string, any>
  ): IndexedCollection<Map<string, any>> => {
    return movie ? movies.filter(el => el.get('id') !== movie.get('id')) : movies;
  };

  render() {
    const { movies, movie } = this.props;

    return <MovieList movies={this.getFilteredMovies(movies, movie)} />;
  }
}

const mapStateToProps = state => ({
  movies: state.getIn(['moviePage', 'movies']),
  genres: state.getIn(['moviePage', 'genres']),
  movie: state.getIn(['moviePage', 'movie'])
});

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genres => dispatch(fetchMovieListByGenre(genres))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesByGenreContainer);
