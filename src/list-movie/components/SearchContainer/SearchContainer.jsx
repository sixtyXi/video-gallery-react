import React, { Component } from 'react';

import styles from './SearchContainer.scss';
import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';
import { SearchBtn } from '../../../components/SearchBtn/SearchBtn';
import { SearchField } from '../SearchField/SearchField';

const FILTERS = ['title', 'genre'];
const DEFAULT_FILTER = FILTERS[0];

export class SearchContainer extends Component {
  state = {
    searchBy: DEFAULT_FILTER,
    searchValue: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { searchBy } = this.state;

    return (
      <form className={styles.searchWrapper}>
        <h1 className={styles.pageTitle}>Find your movie</h1>

        <SearchField name="searchValue" handleChange={this.handleChange} />

        <FilterPanel
          name="searchBy"
          handleChange={this.handleChange}
          title="Search by"
          filters={FILTERS}
          type="btn"
          activeFilterName={searchBy}
        />

        <SearchBtn className="searchBtnPrimary" />
      </form>
    );
  }
}
