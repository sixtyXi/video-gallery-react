import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const app = <App Router={BrowserRouter} />;

hydrate(app, document.getElementById('root'));
