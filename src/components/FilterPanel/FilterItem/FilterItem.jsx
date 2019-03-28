import React, { Fragment } from 'react';

import styles from './FilterItem.scss';

export const FilterItem = (props) => {
  return (
    <Fragment>
      <input
        className={styles.filterInput}
        type="radio"
        name={props.name}
        onChange={props.handleChange}
        id={props.filterName}
        value={props.filterName}
        checked={props.checked}
      />
      <label className={styles[props.styleName]} htmlFor={props.filterName}>
        {props.filterName}
      </label>
    </Fragment>
  );
};
