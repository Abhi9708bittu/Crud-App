import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MyComponent from './MyComponent';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <MyComponent />
  </Provider>,
  document.getElementById('root')
);
