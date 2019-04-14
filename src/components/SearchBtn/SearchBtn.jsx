import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBtn.scss';

export const SearchBtn = ({ className, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.searchBtn} ${styles[className]}`}
      type="button"
    >
      Search
    </button>
  );
};

SearchBtn.propTypes = {
  className: PropTypes.oneOf(['searchBtnPrimary', 'searchBtnSecondary']),
  handleClick: PropTypes.func
};

SearchBtn.defaultProps = {
  className: 'searchBtnPrimary',
  handleClick: () => {}
};
