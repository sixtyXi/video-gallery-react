// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchMovieList } from '../../../actions/actions';
import { SearchBtn } from '../../../components/SearchBtn/SearchBtn';

type Props = {
  pushUrl: Function,
  getMovies: Function
};

export class SearchBtnContainer extends PureComponent<Props> {
  handleClick = () => {
    this.props.pushUrl();
    this.props.getMovies();
  };

  render() {
    return <SearchBtn handleClick={this.handleClick} />;
  }
}

const mapDispatchToProps = dispatch => ({ getMovies: () => dispatch(fetchMovieList()) });

export default connect(
  null,
  mapDispatchToProps
)(SearchBtnContainer);
