import React, { Component } from 'react';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';

export class SortContainer extends Component {
  constructor(props) {
    super(props);
    this.filters = props.filters;

    if (!this.filters.length) return;

    this.defaultFilterIdx = props.defaultFilterIdx || 0;
    this.panelTitle = props.title || 'Search by';
    this.panelType = props.type || 'btn';

    this.defaultFilter = this.filters[this.defaultFilterIdx];
    this.state = {
      filterValue: this.defaultFilter.value
    };
  }

  handleChange(event) {
    this.setState({ filterValue: event.target.value });
  }

  render() {
    const { filterValue } = this.state;

    return (
      <FilterPanel
        name="filterValue"
        handleChange={e => this.handleChange(e)}
        title={this.panelTitle}
        filters={this.filters}
        type={this.panelType}
        activeFilter={filterValue}
      />
    );
  }
}
