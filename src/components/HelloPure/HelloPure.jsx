import React, { PureComponent } from 'react';

import styles from './HelloPure.scss';
export class HelloPure extends PureComponent {
  render() {
    return <p className={styles.paragraph}>Pure Component</p>;
  }
}
