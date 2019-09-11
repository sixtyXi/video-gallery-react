// @flow

import * as React from 'react';

type Props = {
  children: React.Node
};

type State = {
  hasError: boolean
};

export class ErrorBoundary extends React.Component<Props, State> {
  static logError(error: Error, info: Object) {
    console.warn(error);
    console.warn(info);
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, info: Object) {
    this.setState({ hasError: true });
    ErrorBoundary.logError(error, info);
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
