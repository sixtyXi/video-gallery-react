// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import './App.scss';
import { Decorator } from './containers/Decorator/Decorator';

import type { Store } from './configureStore';
import type { Location } from './shared/types';

const ListMoviePage = loadable(() =>
  import('./list-movie/ListMoviePageContainer/ListMoviePageContainer')
);
const MoviePage = loadable(() => import('./movie/MoviePage/MoviePage'));
const NotFoundPage = loadable(() => import('./not-found/NotFoundPage/NotFoundPage'));

type Props = {
  Router: Function,
  location?: Location,
  context?: { url: string },
  store: Store
};

const App = ({ Router, location, context, store }: Props) => {
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

App.defaultProps = {
  location: null,
  context: null
};

export default App;
