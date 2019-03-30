import React from 'react';
import 'normalize.css';

import './App.scss';
import { ErrorBondary } from './components/ErrorBoundary/ErrorBoundary';
//import { MoviePage } from './movie/MoviePage/MoviePage';
import { ListMoviePage } from './list-movie/ListMoviePage/ListMoviePage';

const App = () => {
  return (
    <ErrorBondary>
      <ListMoviePage />
    </ErrorBondary>
  );
};

export default App;
