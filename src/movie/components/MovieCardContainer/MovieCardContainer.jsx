// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import type { RecordOf } from 'immutable';

import { MovieCard } from '../MovieCard/MovieCard';
import { fetchMoviePage } from '../../../actions/actions';
import { getMovieSelector } from '../../../selectors';

import type { Location, Movie } from '../../../shared/types';

type RouterMatch = {
  params: {
    id: string
  }
};

type Props = {
  movie: RecordOf<Movie>,
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
    const id = movie ? movie.get('id') : '';

    if (location !== nextProps.location) {
      getMovie(nextProps.match.params.id);
    }

    return id !== nextProps.movie.get('id');
  }

  render() {
    const { movie } = this.props;

    return movie ? <MovieCard movie={movie} /> : null;
  }
}

const mapStateToProps = state => ({
  movie: getMovieSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getMovie: id => {
    dispatch(fetchMoviePage(id));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCardContainer)
);
