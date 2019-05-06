import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import configureStore from './configureStore';

function renderHTML(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React Video Gallery</title>
      ${
        process.env.NODE_ENV === 'development'
          ? ''
          : '<link rel="stylesheet" type="text/css" href="/main.css">'
      }
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/vendor.bundle.js"></script>
      <script src="/main.bundle.js"></script>
    </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};

    const renderApp = () => (
      <App Router={StaticRouter} location={req.url} context={context} store={store} />
    );

    store.runSaga().done.then(() => {
      const htmlString = renderToString(renderApp());

      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        });

        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    });

    renderToString(renderApp());
    store.close();
  };
}
