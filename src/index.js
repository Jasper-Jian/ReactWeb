import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import routes from './common/routes';
import rootReducer from './common/reducers';
import './index.scss';

const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
);
