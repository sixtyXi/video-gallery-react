import React, { Component } from 'react';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';

const FILTERS = ['release date', 'rating'];
const DEFAULT_FILTER = FILTERS[0];

export class SortContainer extends Component {
  state = {
    sortValue: DEFAULT_FILTER
  };

  handleChange = event => {
    this.setState({ sortValue: event.target.value });
  };

  render() {
    const { sortValue } = this.state;

    return (
      <FilterPanel
        name="sortValue"
        handleChange={this.handleChange}
        title="Sort by"
        filters={FILTERS}
        className="label"
        activeFilterName={sortValue}
      />
    );
  }
}
