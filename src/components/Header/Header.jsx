import React from 'react';

import styles from './Header.scss';

export const Header = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};
