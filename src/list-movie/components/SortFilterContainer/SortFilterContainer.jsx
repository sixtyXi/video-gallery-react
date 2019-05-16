// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';
import { setSortBy } from '../../../actions/actions';
import { SORT_FILTERS } from '../../../shared/filtersMock';

type Props = {
  currentFilter: string,
  setFilterValue: Function
};

const SORT_TITLE = 'Sort by';

export class SortFilterContainer extends Component<Props> {
  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.props.setFilterValue(event.currentTarget.value);
  };

  render() {
    const { currentFilter } = this.props;

    return (
      <FilterPanel
        handleChange={this.handleChange}
        title={SORT_TITLE}
        filters={SORT_FILTERS}
        type="label"
        activeFilter={currentFilter}
        name="sortFilter"
      />
    );
  }
}

const mapStateToProps = state => ({ currentFilter: state.movieList.sortBy });
const mapDispatchToProps = dispatch => ({
  setFilterValue: filterValue => dispatch(setSortBy(filterValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortFilterContainer);
