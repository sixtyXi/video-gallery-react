import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapGenres } from '../../../utils/utils';

export class GenresInfoContainer extends Component {
  getGenres = () => {
    const { genres } = this.props;

    return mapGenres(genres);
  };

  render() {
    return <div>Films by {this.getGenres()} genre</div>;
  }
}

GenresInfoContainer.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string)
};

GenresInfoContainer.defaultProps = {
  genres: []
};

const mapStateToProps = state => ({ genres: state.moviePage.genres });

export default connect(mapStateToProps)(GenresInfoContainer);
