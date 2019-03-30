import React from 'react';

import styles from './SearchBtn.scss';

export const SearchBtn = ({ className }) => {
  return (
    <button className={`${styles.searchBtn} ${styles[className]}`} type="button">
      Search
    </button>
  );
};
