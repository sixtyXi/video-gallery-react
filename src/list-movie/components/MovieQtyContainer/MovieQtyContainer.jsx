// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getMoviesQtySelector } from '../../../selectors';

type Props = {
  movieQty: number
};

export const MovieQtyContainer = ({ movieQty }: Props) => {
  return <div>{`${movieQty} movies found`}</div>;
};

const mapStateToProps = state => ({ movieQty: getMoviesQtySelector(state) });

export default connect(mapStateToProps)(MovieQtyContainer);
