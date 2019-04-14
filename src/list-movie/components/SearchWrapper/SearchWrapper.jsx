import React from 'react';

import styles from './SearchWrapper.scss';
import SearchBtnContainer from '../../../containers/SearchBtnContainer/SearchBtnContainer';
import SearchFieldContainer from '../SearchFieldContainer/SearchFieldContainer';
import SearchFilterContainer from '../SearchFilterContainer/SearchFilterContainer';

export const SearchWrapper = () => {
  return (
    <form className={styles.searchWrapper}>
      <h1 className={styles.pageTitle}>Find your movie</h1>

      <SearchFieldContainer />

      <SearchFilterContainer />

      <SearchBtnContainer />
    </form>
  );
};
