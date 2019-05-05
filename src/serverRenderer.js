import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

function renderHTML(html) {
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
          : '<link href="main.css" rel="stylesheet" type="text/css">'
      }
      <script src="vendor.bundle.js" defer></script>
      <script src="main.bundle.js" defer></script>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};

    const app = <App Router={StaticRouter} location={req.url} context={context} />;
    const htmlString = renderToString(app);

    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });

      res.end();
      return;
    }

    res.send(renderHTML(htmlString));
  };
}
