// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './SearchFieldContainer.scss';
import { setSearch, fetchMovieList } from '../../../actions/actions';

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
      <div className={styles.searchField}>
        <input
          data-cy="searchField"
          type="text"
          value={searchTxt}
          id="search"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
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
