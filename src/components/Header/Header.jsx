// @flow

import * as React from 'react';
import styles from './Header.scss';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const Header = ({ children }: { children: React.Node | null }) => {
  return (
    <header data-cy="header" className={styles.header}>
      <ContentWrapper>{children}</ContentWrapper>
    </header>
  );
};

Header.defaultProps = {
  children: null
};
