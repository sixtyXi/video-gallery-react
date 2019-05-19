// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../../../reducers/rootReducer';

import { SummaryInfo } from '../../../components/SummaryInfo/SummaryInfo';
import ConnectedMovieQtyContainer from '../MovieQtyContainer/MovieQtyContainer';
import ConnectedSortFilterContainer from '../SortFilterContainer/SortFilterContainer';

export const SummaryListMovieContainer = ({ moviesQty }: { moviesQty: number }) => {
  return moviesQty ? (
    <SummaryInfo>
      <ConnectedMovieQtyContainer />
      <ConnectedSortFilterContainer />
    </SummaryInfo>
  ) : null;
};

export const mapStateToProps = (state: State) => ({
  moviesQty: state.getIn(['movieList', 'movies']).size
});

export default connect(mapStateToProps)(SummaryListMovieContainer);
