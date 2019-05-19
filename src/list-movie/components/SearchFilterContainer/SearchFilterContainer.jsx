// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';
import { setSearchBy } from '../../../actions/actions';
import { SEARCH_FILTERS } from '../../../shared/filtersMock';

type Props = {
  currentFilter: string,
  setFilterValue: Function
};

const SEARCH_TITLE = 'Search by';

export class SearchFilterContainer extends Component<Props> {
  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.props.setFilterValue(event.currentTarget.value);
  };

  render() {
    const { currentFilter } = this.props;

    return (
      <FilterPanel
        handleChange={this.handleChange}
        title={SEARCH_TITLE}
        filters={SEARCH_FILTERS}
        type="btn"
        activeFilter={currentFilter}
        name="searchFilter"
      />
    );
  }
}

const mapStateToProps = state => ({ currentFilter: state.getIn(['movieList', 'searchBy']) });
const mapDispatchToProps = dispatch => ({
  setFilterValue: filterValue => dispatch(setSearchBy(filterValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilterContainer);
