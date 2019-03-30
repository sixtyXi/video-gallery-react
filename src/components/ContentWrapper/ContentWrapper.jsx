import React from 'react';

import styles from './ContentWrapper.scss';

export const ContentWrapper = ({ children }) => {
  return <section className={styles.contentWrapper}>{children}</section>;
};
