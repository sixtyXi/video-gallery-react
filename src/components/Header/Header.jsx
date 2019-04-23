import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const Header = ({ children }) => {
  return (
    <header data-cy="header" className={styles.header}>
      <ContentWrapper>{children}</ContentWrapper>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Header.defaultProps = {
  children: null
};
