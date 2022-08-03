import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.ts';
import App from './App';
import './styles.css';
import './styles.scss';

// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
