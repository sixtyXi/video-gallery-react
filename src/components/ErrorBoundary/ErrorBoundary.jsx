import React, { Component } from 'react';

export class ErrorBondary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    this.logError(error, info);
  }

  logError(error, info) {
    console.log(error);
    console.table(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}
