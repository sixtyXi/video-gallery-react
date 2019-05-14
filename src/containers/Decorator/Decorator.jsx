import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Footer } from '../../components/Footer/Footer';

export const Decorator = ({ store, children }) => {
  return (
    <Provider store={store}>
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </Provider>
  );
};

Decorator.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
