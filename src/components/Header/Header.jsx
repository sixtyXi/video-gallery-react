import React from 'react';

import styles from './Header.scss';

export const Header = (props) => {
  return <header className={styles.header}>{props.children}</header>;
};
