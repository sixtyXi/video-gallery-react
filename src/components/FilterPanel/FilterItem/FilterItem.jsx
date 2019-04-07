import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './FilterItem.scss';

const cx = classNames.bind(styles);

export const FilterItem = ({ name, handleChange, filterValue, filterTitle, checked, type }) => {
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

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  filterTitle: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(['btn', 'label'])
};

FilterItem.defaultProps = {
  type: 'btn',
  checked: false
};
