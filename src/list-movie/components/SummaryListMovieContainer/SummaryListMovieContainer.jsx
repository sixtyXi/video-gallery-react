// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../../../reducers/rootReducer';

import { SummaryInfo } from '../../../components/SummaryInfo/SummaryInfo';
import ConnectedMovieQtyContainer from '../MovieQtyContainer/MovieQtyContainer';
import ConnectedSortFilterContainer from '../SortFilterContainer/SortFilterContainer';
import { getMoviesQtySelector } from '../../../selectors';

export const SummaryListMovieContainer = ({ moviesQty }: { moviesQty: number }) => {
  return moviesQty ? (
    <SummaryInfo>
      <ConnectedMovieQtyContainer />
      <ConnectedSortFilterContainer />
    </SummaryInfo>
  ) : null;
};

export const mapStateToProps = (state: State) => ({
  moviesQty: getMoviesQtySelector(state)
});

export default connect(mapStateToProps)(SummaryListMovieContainer);
