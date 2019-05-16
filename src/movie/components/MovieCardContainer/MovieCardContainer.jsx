// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { MovieCard } from '../MovieCard/MovieCard';
import { fetchMovie } from '../../../actions/actions';

import type { Movie, Location } from '../../../shared/types';

type RouterMatch = {
  params: {
    id: string
  }
};

type Props = {
  movie: Movie,
  getMovie: Function,
  match: RouterMatch,
  location: Location
};

export class MovieCardContainer extends Component<Props> {
  static defaultProps = {
    movie: null
  };

  componentWillMount() {
    const {
      getMovie,
      match: {
        params: { id }
      }
    } = this.props;

    getMovie(id);
  }

  shouldComponentUpdate(nextProps: Props) {
    const { location, movie, getMovie } = this.props;
    const id = movie ? movie.id : '';

    if (location !== nextProps.location) {
      getMovie(nextProps.match.params.id);
    }

    return id !== nextProps.movie.id;
  }

  render() {
    const { movie } = this.props;

    if (movie) {
      return Object.keys(movie).length === 0 ? <Redirect to="/404" /> : <MovieCard movie={movie} />;
    }

    return null;
  }
}

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
