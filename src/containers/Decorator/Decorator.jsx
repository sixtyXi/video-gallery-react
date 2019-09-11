// @flow

import * as React from 'react';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Footer } from '../../components/Footer/Footer';

import type { Store } from '../../configureStore';

type Props = {
  store: Store,
  children: React.Node
};

export const Decorator = ({ store, children }: Props) => {
  return (
    <Provider store={store}>
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </Provider>
  );
};
