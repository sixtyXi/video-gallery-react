import React from 'react';

import styles from './SearchWrapper.scss';
import { SearchBtn } from '../../../components/SearchBtn/SearchBtn';
import { SearchFieldContainer } from '../SearchFieldContainer/SearchFieldContainer';
import { SortContainer } from '../SortContainer/SortContainer';
import { SEARCH_FILTERS } from '../../../shared/filtersMock';

export const SearchWrapper = () => {
  return (
    <form className={styles.searchWrapper}>
      <h1 className={styles.pageTitle}>Find your movie</h1>

      <SearchFieldContainer />

      <SortContainer filters={SEARCH_FILTERS} />

      <SearchBtn />
    </form>
  );
};
