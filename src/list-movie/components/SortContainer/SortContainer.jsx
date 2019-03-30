import React, { Component } from 'react';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';

export class SortContainer extends Component {
  constructor(props) {
    super(props);
    this.filters = [ 'release date', 'rating' ];
    this.defaultFilter = this.filters[0];
    this.state = {
      sortValue: this.defaultFilter
    };
  }

  handleChange(event) {
    this.setState({ sortValue: event.target.value });
  }

  render() {
    return (
      <FilterPanel
        name="sortValue"
        handleChange={this.handleChange.bind(this)}
        title="Sort by"
        filters={this.filters}
        styleName="label"
        activeFilterName={this.state.sortValue}
      />
    );
  }
}
