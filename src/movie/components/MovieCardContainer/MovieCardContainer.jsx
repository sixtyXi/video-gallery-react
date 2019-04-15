import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard/MovieCard';
import { fetchMovie } from '../../../actions/actions';

export class MovieCardContainer extends PureComponent {
  componentDidMount() {
    const { getMovie } = this.props;

    getMovie();
  }

  render() {
    const { movie } = this.props;

    return movie ? <MovieCard movie={movie} /> : null;
  }
}

MovieCardContainer.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
  }),
  getMovie: PropTypes.func.isRequired,
  id: PropTypes.number
};

MovieCardContainer.defaultProps = {
  movie: null,
  id: 680
};

const mapStateToProps = state => ({ movie: state.moviePage.movie });
const mapDispatchToProps = (dispatch, ownProps) => ({
  getMovie: () => dispatch(fetchMovie(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCardContainer);
