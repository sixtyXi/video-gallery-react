import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

import styles from './FilterItem.scss';

const cx = classNames.bind(styles);

export const FilterItem = ({
  name,
  handleChange,
  filterValue,
  filterTitle,
  checked,
  type = 'btn'
}) => {
  const className = cx({
    btn: type === 'btn',
    label: type === 'label'
  });

  return (
    <Fragment>
      <input
        className={styles.filterInput}
        type="radio"
        name={name}
        onChange={handleChange}
        id={filterValue}
        value={filterValue}
        checked={checked}
      />
      <label className={className} htmlFor={filterValue}>
        {filterTitle}
      </label>
    </Fragment>
  );
};
