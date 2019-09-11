// @flow

import React, { Component } from 'react';
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
import type { Filter, Location } from '../../shared/types';

type Props = {
  getMovies: Function,
  /* eslint-disable react/no-unused-prop-types */
  location: Location,
  setSearchValue: Function,
  setSearchFilter: Function,
  setSortFilter: Function,
  setDefaultState: Function
  /* eslint-enable react/no-unused-prop-types */
};

export class ListMoviePageContainer extends Component<Props> {
  componentWillMount() {
    const { getMovies } = this.props;

    const filtersUpdated = this.updateFilters(this.props);

    if (filtersUpdated) {
      getMovies();
    }
  }

  shouldComponentUpdate(nextProps: Props) {
    const filtersUpdated = this.updateFilters(nextProps);
    const { getMovies } = this.props;

    return filtersUpdated && getMovies();
  }

  updateFilters = (props: Props) => {
    const {
      location: { search },
      setDefaultState
    } = props;

    let filtersUpdated = false;

    if (search) {
      const parsed = queryString.parse(search);
      const searchEntries: Array<[string, mixed]> = Object.entries({
        ...DEFAULT_FILTERS,
        ...parsed
      });

      filtersUpdated = this.dispatchFiltersValue(searchEntries, props);
    } else {
      setDefaultState();
    }

    return filtersUpdated;
  };

  dispatchFiltersValue = (filterEntries: Array<[string, mixed]>, props: Props) => {
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

  isValidFilterValue = (filterValue: mixed, filters: Array<Filter>) => {
    return filters.some(filter => filter.value === filterValue);
  };

  render() {
    return <ListMoviePage />;
  }
}

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
