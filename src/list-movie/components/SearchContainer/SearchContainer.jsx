import React, { Component } from 'react';

import styles from './SearchContainer.scss';
import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';
import { SearchBtn } from '../../../components/SearchBtn/SearchBtn';
import { SearchField } from '../SearchField/SearchField';

export class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.filters = [ 'title', 'genre' ];
    this.defaultFilter = this.filters[0];
    this.state = {
      searchByValue: this.defaultFilter,
      searchValue: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className={styles.searchWrapper}>
        <h1 className={styles.pageTitle}>Find your movie</h1>

        <SearchField name="searchValue" handleChange={this.handleChange.bind(this)} />

        <FilterPanel
          name="searchBy"
          handleChange={this.handleChange.bind(this)}
          title="Search by"
          filters={this.filters}
          styleName="btn"
          activeFilterName={this.state.searchByValue}
        />

        <SearchBtn styleName="searchBtnPrimary" />
      </form>
    );
  }
}
