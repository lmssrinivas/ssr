import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';

function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Doctors of Kukatpally </title>
        <style id="jss-server-side">${css}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <!-- Fonts to support Material Design -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
         <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Mansalva|Playfair+Display|Zhi+Mang+Xing&display=swap" rel="stylesheet">
      </head>
      <body>
        <script async src="bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();
  const context = {};

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <StaticRouter location={req.url} context={context}>
              <App />
          </StaticRouter>
      </ThemeProvider>,
    ),
  );

  // Grab the CSS from our sheets.
  const css = sheets.toString();

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css));
}

const app = express();
app.use('/', express.static('build'));

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${port}`);
});
