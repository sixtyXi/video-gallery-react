import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovieList } from '../../actions/actions';
import { SearchBtn } from '../../components/SearchBtn/SearchBtn';

export class SearchBtnContainer extends PureComponent {
  handleClick = () => {
    this.props.getMovies();
  };

  render() {
    return <SearchBtn handleClick={this.handleClick} />;
  }
}

SearchBtnContainer.propTypes = {
  getMovies: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({ getMovies: () => dispatch(fetchMovieList()) });

export default connect(
  null,
  mapDispatchToProps
)(SearchBtnContainer);
