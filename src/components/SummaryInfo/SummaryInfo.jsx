// @flow

import * as React from 'react';

import styles from './SummaryInfo.scss';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const SummaryInfo = ({ children }: { children: React.Node | null }) => {
  return (
    <div className={styles.summaryWrapper}>
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

SummaryInfo.defaultProps = {
  children: null
};
