// @flow
import * as React from 'react';

import styles from './FilterPanel.scss';
import { FilterItem } from './FilterItem/FilterItem';
import type { FilterType } from './FilterItem/FilterItem';
import type { Filter } from '../../shared/types';

type Props = {
  filters: Array<Filter>,
  activeFilter: string,
  name: string,
  handleChange: Function,
  type: FilterType,
  title: string
};

export const FilterPanel = ({
  filters,
  activeFilter,
  name,
  handleChange,
  type,
  title
}: Props): React.Node => {
  const filterItems = filters.map(filter => {
    const isChecked: boolean = activeFilter === filter.value;

    return (
      <FilterItem
        key={filter.value}
        name={name}
        handleChange={handleChange}
        filterValue={filter.value}
        filterTitle={filter.title}
        type={type}
        checked={isChecked}
      />
    );
  });

  return filterItems.length ? (
    <div className={styles.filterWrapper}>
      <p className={styles.filterTitle}>{title}</p>
      {filterItems}
    </div>
  ) : null;
};

FilterPanel.defaultProps = {
  filters: [],
  activeFilter: '',
  type: 'btn',
  title: 'Search by',
  handleChange: () => {},
  name: 'filterValue'
};
