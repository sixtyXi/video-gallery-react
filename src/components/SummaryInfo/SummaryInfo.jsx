import React from 'react';

import styles from './SummaryInfo.scss';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const SummaryInfo = (props) => {
  return (
    <div className={styles.summaryWrapper}>
      <ContentWrapper>{props.children}</ContentWrapper>
    </div>
  );
};
