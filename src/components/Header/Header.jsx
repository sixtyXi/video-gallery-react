import React from 'react';

import styles from './Header.scss';

export const Header = ({ children }) => {
  return <header data-cy="header" className={styles.header}>{children}</header>;
};
