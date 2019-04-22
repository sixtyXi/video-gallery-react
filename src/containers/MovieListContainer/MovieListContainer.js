import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MovieList } from '../../components/MovieList/MovieList';
import { fetchMovieList } from '../../actions/actions';
import { SORT_FILTERS } from '../../shared/filtersMock';

export class MovieListContainer extends Component {
  componentDidMount() {
    const { getMovies } = this.props;

    getMovies();
  }

  getSortedMovies = () => {
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

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  sortBy: PropTypes.string.isRequired,
  getMovies: PropTypes.func.isRequired
};

MovieListContainer.defaultProps = {
  movies: []
};

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  sortBy: state.movieList.sortBy
});

const mapDispatchToProps = dispatch => ({ getMovies: () => dispatch(fetchMovieList()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
