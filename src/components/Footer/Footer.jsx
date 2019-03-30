import React from 'react';

import styles from './Footer.scss';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { Logo } from '../Logo/Logo';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContentWrapper>
        <Logo />
      </ContentWrapper>
    </footer>
  );
};
