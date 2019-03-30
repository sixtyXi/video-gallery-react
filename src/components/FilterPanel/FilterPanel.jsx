import React from 'react';

import styles from './FilterPanel.scss';
import { FilterItem } from './FilterItem/FilterItem';

export const FilterPanel = (props) => {
  const filters = props.filters.map((filterName) => {
    const isChecked = props.activeFilterName === filterName;
    return (
      <FilterItem
        key={filterName}
        name={props.name}
        handleChange={props.handleChange}
        filterName={filterName}
        styleName={props.styleName}
        checked={isChecked}
      />
    );
  });
  return (
    <div className={styles.filterWrapper}>
      <p className={styles.filterTitle}>{props.title}</p>
      {filters}
    </div>
  );
};
