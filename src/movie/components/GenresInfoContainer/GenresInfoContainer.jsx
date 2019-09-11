// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { IndexedCollection } from 'immutable';

import { mapGenres } from '../../../utils/utils';
import { SummaryInfo } from '../../../components/SummaryInfo/SummaryInfo';
import { getGenresSelector, getMoviesByGenreQtySelector } from '../../../selectors';

type Props = {
  genres: IndexedCollection<string>,
  moviesQty: number
};

export class GenresInfoContainer extends Component<Props> {
  static defaultProps = {
    genres: []
  };

  getGenres = () => {
    const { genres } = this.props;

    return mapGenres(genres);
  };

  render() {
    const { moviesQty } = this.props;
    const hasMoviesSameGenre = moviesQty > 1;

    return hasMoviesSameGenre ? (
      <SummaryInfo>
        <div>{`Films by ${this.getGenres()} genre`}</div>
      </SummaryInfo>
    ) : null;
  }
}

const mapStateToProps = state => ({
  genres: getGenresSelector(state),
  moviesQty: getMoviesByGenreQtySelector(state)
});

export default connect(mapStateToProps)(GenresInfoContainer);
