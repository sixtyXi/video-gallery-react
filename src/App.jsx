import * as React from 'react';

import { HelloFunc } from './components/HelloFunc/HelloFunc';
import { HelloCreate } from './components/HelloCreate/HelloCreate';
import { HelloPure } from './components/HelloPure/HelloPure';
import { HelloComponent } from './components/HelloComponent/HelloComponent';

const App = () => {
  return (
    <main>
      {HelloCreate}
      <HelloFunc />
      <HelloPure />
      <HelloComponent />
    </main>
  );
};

export default App;
