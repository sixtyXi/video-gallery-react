import React, { PureComponent } from 'react';

import styles from './HelloPure.css';
export class HelloPure extends PureComponent {
  render() {
    return <p className={styles.paragraph}>Pure Component</p>;
  }
}
