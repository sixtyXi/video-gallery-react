import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';

import { MovieCard } from '../MovieCard/MovieCard';
import { fetchMovie } from '../../../actions/actions';

export class MovieCardContainer extends Component {
  componentDidMount() {
    const {
      getMovie,
      match: {
        params: { id }
      }
    } = this.props;

    getMovie(id);
  }

  shouldComponentUpdate(nextProps) {
    const { location, movie, getMovie } = this.props;
    const id = movie ? movie.id : '';

    if (location !== nextProps.location) {
      getMovie(nextProps.match.params.id);
    }

    return id !== nextProps.movie.id;
  }

  render() {
    const { movie } = this.props;

    return Object.keys(movie).length === 0 ? <Redirect to="/404" /> : <MovieCard movie={movie} />;
  }
}

MovieCardContainer.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
  }),
  getMovie: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

MovieCardContainer.defaultProps = {
  movie: null
};

const mapStateToProps = state => ({
  movie: state.moviePage.movie
});

const mapDispatchToProps = dispatch => ({
  getMovie: id => {
    dispatch(fetchMovie(id));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCardContainer)
);
