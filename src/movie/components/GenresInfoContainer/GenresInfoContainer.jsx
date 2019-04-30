import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapGenres } from '../../../utils/utils';
import { SummaryInfo } from '../../../components/SummaryInfo/SummaryInfo';

export class GenresInfoContainer extends Component {
  getGenres = () => {
    const { genres } = this.props;

    return mapGenres(genres);
  };

  render() {
    const { moviesQty } = this.props;
    const hasMoviesSameGenre = moviesQty > 1;

    return hasMoviesSameGenre ? (
      <SummaryInfo>
        <div>Films by {this.getGenres()} genre</div>
      </SummaryInfo>
    ) : null;
  }
}

GenresInfoContainer.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  moviesQty: PropTypes.number.isRequired
};

GenresInfoContainer.defaultProps = {
  genres: []
};

const mapStateToProps = state => ({
  genres: state.moviePage.genres,
  moviesQty: state.moviePage.movies.length
});

export default connect(mapStateToProps)(GenresInfoContainer);
