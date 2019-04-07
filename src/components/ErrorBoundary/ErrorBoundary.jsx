import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ErrorBondary extends Component {
  static logError(error, info) {
    console.warn(error);
    console.warn(info);
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    ErrorBondary.logError(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Something went wrong</h1>;
    }

    return children;
  }
}

ErrorBondary.propTypes = {
  children: PropTypes.element.isRequired
};
