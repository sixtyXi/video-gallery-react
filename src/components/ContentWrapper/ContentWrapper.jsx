import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContentWrapper.scss';

export const ContentWrapper = ({ children }) => {
  return <section className={styles.contentWrapper}>{children}</section>;
};

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

ContentWrapper.defaultProps = {
  children: null
};
