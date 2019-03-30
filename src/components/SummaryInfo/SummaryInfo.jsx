import React from 'react';

import styles from './SummaryInfo.scss';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const SummaryInfo = ({ children }) => {
  return (
    <div className={styles.summaryWrapper}>
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};
