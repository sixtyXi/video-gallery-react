import React from 'react';

import styles from './FilterPanel.scss';
import { FilterItem } from './FilterItem/FilterItem';

export const FilterPanel = ({ filters, activeFilterName, name, handleChange, type, title }) => {
  const filterItems = filters.map(filterName => {
    const isChecked = activeFilterName === filterName;

    return (
      <FilterItem
        key={filterName}
        name={name}
        handleChange={handleChange}
        filterName={filterName}
        type={type}
        checked={isChecked}
      />
    );
  });

  return (
    <div className={styles.filterWrapper}>
      <p className={styles.filterTitle}>{title}</p>
      {filterItems}
    </div>
  );
};
