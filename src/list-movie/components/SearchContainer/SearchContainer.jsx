// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import styles from './SearchContainer.scss';

import ConnectedSearchBtnContainer from '../SearchBtnContainer/SearchBtnContainer';
import ConnectedSearchFieldContainer from '../SearchFieldContainer/SearchFieldContainer';
import ConnectedSearchFilterContainer from '../SearchFilterContainer/SearchFilterContainer';
import { getFiltersSelector } from '../../../selectors';

type History = {
  push: Function
};

type Props = {
  search: string,
  searchBy: string,
  sortBy: string,
  history: History
};

export class SearchContainer extends Component<Props> {
  pushSearchUrl = () => {
    const { search, searchBy, sortBy, history } = this.props;

    history.push(`/search?${queryString.stringify({ search, searchBy, sortBy })}`);
  };

  render() {
    return (
      <form className={styles.searchWrapper}>
        <h1 className={styles.pageTitle}>Find your movie</h1>

        <ConnectedSearchFieldContainer pushUrl={this.pushSearchUrl} />

        <ConnectedSearchFilterContainer />

        <ConnectedSearchBtnContainer pushUrl={this.pushSearchUrl} />
      </form>
    );
  }
}

const mapStateToProps = state => getFiltersSelector(state);

export default withRouter(connect(mapStateToProps)(SearchContainer));
