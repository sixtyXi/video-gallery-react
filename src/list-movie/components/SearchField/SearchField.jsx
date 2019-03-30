import React from 'react';

import styles from './SearchField.scss';

export const SearchField = ({ name, handleChange }) => {
  return (
    <div className={styles.searchField}>
      <input type="text" id="search" name={name} onChange={handleChange} />
    </div>
  );
};
