import React, { Component } from 'react';

import styles from './HelloComponent.css';

export class HelloComponent extends Component {
  render() {
    return <p className={styles.paragraph}>React Component</p>;
  }
}
