// @flow
import * as React from 'react';

import styles from './ContentWrapper.scss';

type Props = {
  children: React.Node | null
};

export const ContentWrapper = ({ children }: Props) => {
  return <section className={styles.contentWrapper}>{children}</section>;
};

ContentWrapper.defaultProps = {
  children: null
};
