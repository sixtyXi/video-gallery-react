import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class MovieQtyContainer extends PureComponent {
  render() {
    const { movieQty } = this.props;

    return <div>{`${movieQty} movies found`}</div>;
  }
}

MovieQtyContainer.propTypes = {
  movieQty: PropTypes.number.isRequired
};

const mapStateToProps = state => ({ movieQty: state.movieList.movies.length });

export default connect(mapStateToProps)(MovieQtyContainer);
