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
  componentWillMount() {
    const { genres, getMoviesByGenre } = this.props;

    getMoviesByGenre(genres);
  }

  shouldComponentUpdate(nextProps) {
    const { movies, movie, getMoviesByGenre } = this.props;
    const { movies: nextMovies, movie: nextMovie } = nextProps;

    const movieId = movie ? movie.id : null;
    const nextMovieId = nextMovie ? nextMovie.id : null;

    if (movieId !== nextMovieId) {
      getMoviesByGenre(nextProps.genres);
    }

    const shouldUpdate = !isEqualMovies(
      this.getFilteredMovies(movies, movie),
      this.getFilteredMovies(nextMovies, nextMovie)
    );

    return shouldUpdate;
  }

  getFilteredMovies = (movies, movie) => {
    return movie ? movies.filter(el => el.id !== movie.id) : movies;
  };

  render() {
    const { movies, movie } = this.props;

    return <MovieList movies={this.getFilteredMovies(movies, movie)} />;
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
