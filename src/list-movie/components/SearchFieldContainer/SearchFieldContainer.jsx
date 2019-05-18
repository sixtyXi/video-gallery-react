// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearch, fetchMovieList } from '../../../actions/actions';
import { SearchField } from '../SearchField/SearchField';

type Props = {
  searchTxt: string,
  setSearchValue: Function,
  getMovies: Function,
  pushUrl: Function
};

export class SearchFieldContainer extends Component<Props> {
  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.props.setSearchValue(event.currentTarget.value);
  };

  handleKeyDown = (event: SyntheticKeyboardEvent<>) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.props.pushUrl();
      this.props.getMovies();
    }
  };

  render() {
    const { searchTxt } = this.props;

    return (
      <SearchField
        searchValue={searchTxt}
        handleChange={this.handleChange}
        handleKeyDown={this.handleKeyDown}
      />
    );
  }
}

const mapStateToProps = state => ({ searchTxt: state.movieList.search });
const mapDispatchToProps = dispatch => ({
  setSearchValue: searchTxt => dispatch(setSearch(searchTxt)),
  getMovies: () => dispatch(fetchMovieList())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchFieldContainer)
);
