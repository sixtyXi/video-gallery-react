import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MovieList } from '../../../components/MovieList/MovieList';
import { fetchMovieListByGenre } from '../../../actions/actions';

const isEqualGenre = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  return arr1.sort().join() === arr2.sort().join();
};

const mapMoviesToComparableString = movies => {
  const ids = movies.map(movie => movie.id);

  return ids.sort((first, second) => first - second).join();
};

const isEqualMovies = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const first = mapMoviesToComparableString(arr1);
  const second = mapMoviesToComparableString(arr2);

  return first === second;
};

export class MoviesByGenreContainer extends Component {
  shouldComponentUpdate(nextProps) {
    const { genres, movies, getMoviesByGenre } = this.props;

    if (!isEqualGenre(genres, nextProps.genres)) {
      getMoviesByGenre(nextProps.genres);
    }

    return !isEqualMovies(movies, nextProps.movies);
  }

  getMoviesExceptCurrent = () => {
    const { movies, movie } = this.props;

    return movie ? movies.filter(el => el.id !== movie.id) : movies;
  };

  render() {
    return <MovieList movies={this.getMoviesExceptCurrent()} />;
  }
}

MoviesByGenreContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  genres: PropTypes.arrayOf(PropTypes.string),
  movie: PropTypes.shape({
    id: PropTypes.number
  }),
  getMoviesByGenre: PropTypes.func.isRequired
};

MoviesByGenreContainer.defaultProps = {
  movies: [],
  genres: [],
  movie: null
};

const mapStateToProps = state => ({
  movies: state.moviePage.movies,
  genres: state.moviePage.genres,
  movie: state.moviePage.movie
});

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genres => dispatch(fetchMovieListByGenre(genres))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesByGenreContainer);
