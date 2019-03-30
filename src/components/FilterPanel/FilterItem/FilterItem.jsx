import React, { Fragment } from 'react';

import styles from './FilterItem.scss';

export const FilterItem = ({ name, handleChange, filterName, checked, className }) => {
  return (
    <Fragment>
      <input
        className={styles.filterInput}
        type="radio"
        name={name}
        onChange={handleChange}
        id={filterName}
        value={filterName}
        checked={checked}
      />
      <label className={styles[className]} htmlFor={filterName}>
        {filterName}
      </label>
    </Fragment>
  );
};
