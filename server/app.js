const path = require('path');
const express = require('express');

const app = express();

const PUBLIC_PATH = path.join(__dirname, '../dist');

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

  const config = require('../webpack');
  const multiCompiler = webpack(config);
  const clientCompiler = multiCompiler.compilers.find(c => c.name === 'client');

  app.use(webpackDevMiddleware(multiCompiler, { serverSideRender: true, writeToDisk: true }));
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(multiCompiler));
} else {
  const serverRenderer = require('../dist/serverRenderer').default;

  app.use(express.static(PUBLIC_PATH));
  app.use(serverRenderer());
}

module.exports = app;
