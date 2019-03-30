import React from 'react';

import styles from './SearchField.scss';

export const SearchField = (props) => {
  return (
    <div className={styles.searchField}>
      <input type="text" id="search" name={props.name} onChange={props.handleChange} />
    </div>
  );
};
