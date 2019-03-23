import React, { Fragment } from 'react';

import { HelloFunc } from './components/HelloFunc/HelloFunc';
import { HelloCreate } from './components/HelloCreate/HelloCreate';
import { HelloPure } from './components/HelloPure/HelloPure';
import { HelloComponent } from './components/HelloComponent/HelloComponent';

import 'normalize.css';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      {HelloCreate}
      <HelloFunc />
      <HelloPure />
      <HelloComponent />
    </Fragment>
  );
};

export default App;
