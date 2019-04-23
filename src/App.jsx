import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css';

import './App.scss';
import { MoviePage } from './movie/MoviePage/MoviePage';
import ListMoviePageContainer from './list-movie/ListMoviePageContainer/ListMoviePageContainer';
import { NotFoundPage } from './not-found/NotFoundPage/NotFoundPage';
import { Decorator } from './containers/Decorator/Decorator';

const App = () => {
  return (
    <Decorator>
      <Router>
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

export default App;
