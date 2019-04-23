import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css';

import './App.scss';
import { ErrorBondary } from './components/ErrorBoundary/ErrorBoundary';
import { MoviePage } from './movie/MoviePage/MoviePage';
import { ListMoviePage } from './list-movie/ListMoviePage/ListMoviePage';
import { NotFoundPage } from './not-found/NotFoundPage/NotFoundPage';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBondary>
          <Router>
            <Switch>
              <Route exact path="/" component={ListMoviePage} />
              <Route path="/search" component={ListMoviePage} />
              <Route exact path="/film/:id" component={MoviePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
        </ErrorBondary>
      </PersistGate>
    </Provider>
  );
};

export default App;
