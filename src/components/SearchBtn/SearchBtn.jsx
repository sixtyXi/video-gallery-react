// @flow

import React from 'react';

import styles from './SearchBtn.scss';

type BtnClassName = 'searchBtnPrimary' | 'searchBtnSecondary';

type Props = {
  className: BtnClassName,
  handleClick: Function
};

export const SearchBtn = ({ className, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.searchBtn} ${styles[className]}`}
      type="button"
    >
      {'Search'}
    </button>
  );
};

SearchBtn.defaultProps = {
  className: 'searchBtnPrimary',
  handleClick: () => {}
};
