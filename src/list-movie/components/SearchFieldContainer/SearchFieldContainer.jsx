import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './SearchFieldContainer.scss';
import { setSearch, fetchMovieList } from '../../../actions/actions';

export class SearchFieldContainer extends Component {
  handleChange = event => {
    this.props.setSearchValue(event.target.value);
  };

  handleSubmit = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.props.getMovies();
    }
  };

  render() {
    const { searchTxt } = this.props;

    return (
      <div className={styles.searchField}>
        <input
          data-cy="searchField"
          type="text"
          value={searchTxt}
          id="search"
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}

SearchFieldContainer.propTypes = {
  searchTxt: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ searchTxt: state.movieList.search });
const mapDispatchToProps = dispatch => ({
  setSearchValue: searchTxt => dispatch(setSearch(searchTxt)),
  getMovies: () => dispatch(fetchMovieList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFieldContainer);
