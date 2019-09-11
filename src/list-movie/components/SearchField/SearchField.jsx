// @flow

import React from 'react';

import styles from './SearchField.scss';

type Props = {
  searchValue: string,
  handleChange: Function,
  handleKeyDown: Function
};

export const SearchField = ({ searchValue, handleChange, handleKeyDown }: Props) => (
  <div className={styles.searchField}>
    <input
      data-cy="searchField"
      type="text"
      value={searchValue}
      id="search"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  </div>
);
