import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterPanel.scss';
import { FilterItem } from './FilterItem/FilterItem';

export const FilterPanel = ({ filters, activeFilter, name, handleChange, type, title }) => {
  const filterItems = filters.map(filter => {
    const isChecked = activeFilter === filter.value;

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

FilterPanel.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  activeFilter: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.oneOf(['btn', 'label']),
  title: PropTypes.string
};

FilterPanel.defaultProps = {
  filters: [],
  activeFilter: '',
  type: 'btn',
  title: 'Search by',
  handleChange: () => {},
  name: 'filterValue'
};
