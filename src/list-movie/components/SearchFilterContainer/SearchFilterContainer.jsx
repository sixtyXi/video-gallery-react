import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';
import { setSearchBy } from '../../../actions/actions';
import { SEARCH_FILTERS } from '../../../shared/filtersMock';

const SEARCH_TITLE = 'Search by';

export class SearchFilterContainer extends Component {
  handleChange = event => {
    this.props.setFilterValue(event.target.value);
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

SearchFilterContainer.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setFilterValue: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ currentFilter: state.movieList.searchBy });
const mapDispatchToProps = dispatch => ({
  setFilterValue: filterValue => dispatch(setSearchBy(filterValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilterContainer);
