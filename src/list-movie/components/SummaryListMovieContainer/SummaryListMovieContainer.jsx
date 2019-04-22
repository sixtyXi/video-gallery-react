import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SummaryInfo } from '../../../components/SummaryInfo/SummaryInfo';
import MovieQtyContainer from '../MovieQtyContainer/MovieQtyContainer';
import SortFilterContainer from '../SortFilterContainer/SortFilterContainer';

export const SummaryListMovieContainer = ({ moviesQty }) => {
  return moviesQty ? (
    <SummaryInfo>
      <MovieQtyContainer />
      <SortFilterContainer />
    </SummaryInfo>
  ) : null;
};

SummaryListMovieContainer.propTypes = {
  moviesQty: PropTypes.number.isRequired
};

export const mapStateToProps = state => ({ moviesQty: state.movieList.movies.length });

export default connect(mapStateToProps)(SummaryListMovieContainer);
