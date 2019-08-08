import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/hvf5cnu.css" />
    </Helmet>
    <App />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
