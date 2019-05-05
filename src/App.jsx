import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';
import { MoviePage } from './movie/MoviePage/MoviePage';
import ListMoviePageContainer from './list-movie/ListMoviePageContainer/ListMoviePageContainer';
import { NotFoundPage } from './not-found/NotFoundPage/NotFoundPage';
import { Decorator } from './containers/Decorator/Decorator';

const App = ({ Router, location, context, store }) => {
  return (
    <Decorator store={store}>
      <Router location={location} context={context}>
        <Switch>
          <Route exact path="/" component={ListMoviePageContainer} />
          <Route path="/search" component={ListMoviePageContainer} />
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
