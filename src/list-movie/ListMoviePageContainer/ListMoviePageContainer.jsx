import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { ListMoviePage } from '../ListMoviePage/ListMoviePage';

import {
  fetchMovieList,
  setSearch,
  setSearchBy,
  setSortBy,
  setInitialState
} from '../../actions/actions';
import { SORT_FILTERS, SEARCH_FILTERS, DEFAULT_FILTERS } from '../../shared/filtersMock';

export class ListMoviePageContainer extends Component {
  componentWillMount() {
    const { getMovies } = this.props;

    const filtersUpdated = this.updateFilters(this.props);

    if (filtersUpdated) {
      getMovies();
    }
  }

  shouldComponentUpdate(nextProps) {
    const filtersUpdated = this.updateFilters(nextProps);

    return filtersUpdated && this.props.getMovies();
  }

  updateFilters = props => {
    const {
      location: { search },
      setDefaultState
    } = props;

    let filtersUpdated = false;

    if (search) {
      const parsed = queryString.parse(search);
      const searchEntries = Object.entries({ ...DEFAULT_FILTERS, ...parsed });

      filtersUpdated = this.dispatchFiltersValue(searchEntries, props);
    } else {
      setDefaultState();
    }

    return filtersUpdated;
  };

  dispatchFiltersValue = (filterEntries, props) => {
    const { setSearchValue, setSearchFilter, setSortFilter } = props;

    let filtersUpdated = false;

    filterEntries.forEach(entry => {
      const filterValue = entry[1];

      switch (entry[0]) {
        case 'search':
          setSearchValue(filterValue);
          filtersUpdated = true;
          break;
        case 'searchBy':
          if (this.isValidFilterValue(filterValue, SEARCH_FILTERS)) {
            setSearchFilter(filterValue);
            filtersUpdated = true;
          }
          break;
        case 'sortBy':
          if (this.isValidFilterValue(filterValue, SORT_FILTERS)) {
            setSortFilter(filterValue);
            filtersUpdated = true;
          }
          break;
        default:
          break;
      }
    });

    return filtersUpdated;
  };

  isValidFilterValue = (filterValue, filters) => {
    return filters.some(filter => filter.value === filterValue);
  };

  render() {
    return <ListMoviePage />;
  }
}

ListMoviePageContainer.propTypes = {
  getMovies: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
  setSortFilter: PropTypes.func.isRequired,
  setDefaultState: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(fetchMovieList()),
  setSearchValue: searchTxt => dispatch(setSearch(searchTxt)),
  setSearchFilter: filterValue => dispatch(setSearchBy(filterValue)),
  setSortFilter: filterValue => dispatch(setSortBy(filterValue)),
  setDefaultState: () => dispatch(setInitialState())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ListMoviePageContainer)
);
