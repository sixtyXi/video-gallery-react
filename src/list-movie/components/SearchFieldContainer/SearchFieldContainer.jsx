import React, { Component } from 'react';

import styles from './SearchFieldContainer.scss';

export class SearchFieldContainer extends Component {
  state = {
    searchTxt: ''
  };

  handleChange(event) {
    this.setState({ searchTxt: event.target.value });
  }

  render() {
    const { searchTxt } = this.state;

    return (
      <div className={styles.searchField}>
        <input type="text" value={searchTxt} id="search" onChange={e => this.handleChange(e)} />
      </div>
    );
  }
}
