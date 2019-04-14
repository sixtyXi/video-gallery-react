import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';
import { setSortBy } from '../../../actions/actions';
import { SORT_FILTERS } from '../../../shared/filtersMock';

const SORT_TITLE = 'Sort by';

export class SortFilterContainer extends Component {
  panelType = 'label';

  handleChange = event => {
    this.props.setFilterValue(event.target.value);
  };

  render() {
    const { currentFilter } = this.props;

    return (
      <FilterPanel
        handleChange={this.handleChange}
        title={SORT_TITLE}
        filters={SORT_FILTERS}
        type={this.panelType}
        activeFilter={currentFilter}
        name="sortFilter"
      />
    );
  }
}

SortFilterContainer.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setFilterValue: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ currentFilter: state.movieList.sortBy });
const mapDispatchToProps = dispatch => ({
  setFilterValue: filterValue => dispatch(setSortBy(filterValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortFilterContainer);
