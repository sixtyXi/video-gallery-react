// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

type Props = {
  movieQty: number
};

export class MovieQtyContainer extends PureComponent<Props> {
  render() {
    const { movieQty } = this.props;

    return <div>{`${movieQty} movies found`}</div>;
  }
}

const mapStateToProps = state => ({ movieQty: state.movieList.movies.length });

export default connect(mapStateToProps)(MovieQtyContainer);
