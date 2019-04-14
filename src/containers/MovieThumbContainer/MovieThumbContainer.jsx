import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MovieThumb } from '../../components/MovieThumb/MovieThumb';
import { fetchMovie } from '../../actions/actions';

export const MovieThumbContainer = props => {
  const { getMovie, movie } = props;

  return <MovieThumb handleClick={() => getMovie(movie.id)} movie={movie} />;
};

MovieThumbContainer.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number
  }).isRequired
};

const mapDispatchToProps = dispatch => ({ getMovie: id => dispatch(fetchMovie(id)) });

export default connect(
  null,
  mapDispatchToProps
)(MovieThumbContainer);
