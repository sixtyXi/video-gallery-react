import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';

export class SortContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: props.filters[props.defaultFilterIdx].value
    };
  }

  handleChange = event => {
    this.setState({ filterValue: event.target.value });
  };

  render() {
    const { filterValue } = this.state;
    const { filters, title: panelTitle, type: panelType } = this.props;

    return (
      <FilterPanel
        name="filterValue"
        handleChange={this.handleChange}
        title={panelTitle}
        filters={filters}
        type={panelType}
        activeFilter={filterValue}
      />
    );
  }
}

SortContainer.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultFilterIdx: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string
};

SortContainer.defaultProps = {
  defaultFilterIdx: 0,
  title: 'Sort by',
  type: 'btn'
};
