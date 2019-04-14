import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';

import './App.scss';
import { ErrorBondary } from './components/ErrorBoundary/ErrorBoundary';
// import { MoviePage } from './movie/MoviePage/MoviePage';
import { ListMoviePage } from './list-movie/ListMoviePage/ListMoviePage';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBondary>
        <ListMoviePage />
      </ErrorBondary>
    </Provider>
  );
};

export default App;
