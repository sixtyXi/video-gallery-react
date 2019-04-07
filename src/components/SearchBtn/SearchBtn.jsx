import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBtn.scss';

export const SearchBtn = ({ className }) => {
  return (
    <button className={`${styles.searchBtn} ${styles[className]}`} type="button">
      Search
    </button>
  );
};

SearchBtn.propTypes = {
  className: PropTypes.oneOf(['searchBtnPrimary', 'searchBtnSecondary'])
};

SearchBtn.defaultProps = {
  className: 'searchBtnPrimary'
};
