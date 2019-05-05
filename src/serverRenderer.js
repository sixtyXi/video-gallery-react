import React from 'react';
import { renderToString } from 'react-dom/server';
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
      <link href="main.css" rel="stylesheet">
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
    const htmlString = renderToString(<App />);

    res.send(renderHTML(htmlString));
  };
}
