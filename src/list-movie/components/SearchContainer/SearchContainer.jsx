import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import styles from './SearchContainer.scss';

import SearchBtnContainer from '../SearchBtnContainer/SearchBtnContainer';
import SearchFieldContainer from '../SearchFieldContainer/SearchFieldContainer';
import SearchFilterContainer from '../SearchFilterContainer/SearchFilterContainer';

export class SearchContainer extends Component {
  pushSearchUrl = () => {
    const { search, searchBy, sortBy, history } = this.props;

    history.push(`/search?${queryString.stringify({ search, searchBy, sortBy })}`);
  };

  render() {
    return (
      <form className={styles.searchWrapper}>
        <h1 className={styles.pageTitle}>Find your movie</h1>

        <SearchFieldContainer pushUrl={this.pushSearchUrl} />

        <SearchFilterContainer />

        <SearchBtnContainer pushUrl={this.pushSearchUrl} />
      </form>
    );
  }
}

SearchContainer.propTypes = {
  search: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  search: state.movieList.search,
  searchBy: state.movieList.searchBy,
  sortBy: state.movieList.sortBy
});

export default withRouter(connect(mapStateToProps)(SearchContainer));
