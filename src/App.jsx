import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';

import './App.scss';
import { ErrorBondary } from './components/ErrorBoundary/ErrorBoundary';
import { MoviePage } from './movie/MoviePage/MoviePage';
// import { ListMoviePage } from './list-movie/ListMoviePage/ListMoviePage';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBondary>
          <MoviePage />
        </ErrorBondary>
      </PersistGate>
    </Provider>
  );
};

export default App;
