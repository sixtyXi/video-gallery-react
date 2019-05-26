// @flow

import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

import styles from './FilterItem.scss';

const cx = classNames.bind(styles);

export type FilterType = 'btn' | 'label';

type Props = {
  name: string,
  handleChange: Function,
  filterValue: string,
  filterTitle: string,
  checked: boolean,
  type: FilterType
};

export const FilterItem = ({
  name,
  handleChange,
  filterValue,
  filterTitle,
  checked,
  type
}: Props) => {
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

FilterItem.defaultProps = {
  type: 'btn',
  checked: false
};
