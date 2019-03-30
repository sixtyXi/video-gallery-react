import React from 'react';

import styles from './SearchBtn.scss';

export const SearchBtn = (props) => {
  return (
    <button className={`${styles.searchBtn} ${styles[props.styleName]}`} type="button">
      Search
    </button>
  );
};
