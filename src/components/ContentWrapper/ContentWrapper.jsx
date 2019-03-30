import React from 'react';

import styles from './ContentWrapper.scss';

export const ContentWrapper = (props) => {
  return <section className={styles.contentWrapper}>{props.children}</section>;
};
