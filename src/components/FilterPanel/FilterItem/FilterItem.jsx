import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

import styles from './FilterItem.scss';

const cx = classNames.bind(styles);

export const FilterItem = ({ name, handleChange, filterName, checked, type }) => {
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
        id={filterName}
        value={filterName}
        checked={checked}
      />
      <label className={className} htmlFor={filterName}>
        {filterName}
      </label>
    </Fragment>
  );
};
