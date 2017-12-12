import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

// Disable beacuse this is demo styling, this is not going to production.
// eslint-disable-next-line
const styles = require('./styles/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
