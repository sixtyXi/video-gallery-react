import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import './App.scss';
import { Decorator } from './containers/Decorator/Decorator';

const ListMoviePage = loadable(() =>
  import('./list-movie/ListMoviePageContainer/ListMoviePageContainer')
);
const MoviePage = loadable(() => import('./movie/MoviePage/MoviePage'));
const NotFoundPage = loadable(() => import('./not-found/NotFoundPage/NotFoundPage'));

const App = ({ Router, location, context, store }) => {
  return (
    <Decorator store={store}>
      <Router location={location} context={context}>
        <Switch>
          <Route exact path="/" component={ListMoviePage} />
          <Route path="/search" component={ListMoviePage} />
          <Route exact path="/film/:id" component={MoviePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Decorator>
  );
};

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};

App.defaultProps = {
  location: null,
  context: null
};

export default App;
