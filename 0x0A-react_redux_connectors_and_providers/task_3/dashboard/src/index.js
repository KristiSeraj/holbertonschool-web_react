import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { uiReducer, initialState } from './reducers/uiReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';

const composed = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(uiReducer, Map(initialState), composed(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

