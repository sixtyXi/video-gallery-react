import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';

import { ErrorBondary } from '../../components/ErrorBoundary/ErrorBoundary';
import { store, persistor } from '../../store';
import { Footer } from '../../components/Footer/Footer';

export const Decorator = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBondary>{children}</ErrorBondary>
        <Footer />
      </PersistGate>
    </Provider>
  );
};

Decorator.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
