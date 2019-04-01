import React, { Component } from 'react';

import styles from './SearchFieldContainer.scss';

export class SearchFieldContainer extends Component {
  state = {
    searchTxt: ''
  };

  handleChange = (event) => {
    this.setState({ searchTxt: event.target.value });
  }

  render() {
    const { searchTxt } = this.state;

    return (
      <div className={styles.searchField}>
        <input
          data-cy="searchField"
          type="text"
          value={searchTxt}
          id="search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
