import React from 'react';
import PropTypes from 'prop-types';

import styles from './SummaryInfo.scss';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const SummaryInfo = ({ children }) => {
  return (
    <div className={styles.summaryWrapper}>
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

SummaryInfo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

SummaryInfo.defaultProps = {
  children: null
};
