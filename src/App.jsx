import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';
import { MoviePage } from './movie/MoviePage/MoviePage';
import ListMoviePageContainer from './list-movie/ListMoviePageContainer/ListMoviePageContainer';
import { NotFoundPage } from './not-found/NotFoundPage/NotFoundPage';
import { Decorator } from './containers/Decorator/Decorator';

const App = ({ Router, location, context }) => {
  return (
    <Decorator>
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
  })
};

App.defaultProps = {
  location: null,
  context: null
};

export default App;
