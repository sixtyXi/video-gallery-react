import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './configureStore';

const store = configureStore(window.PRELOADED_STATE);
const app = <App Router={BrowserRouter} store={store} />;

hydrate(app, document.getElementById('root'));
