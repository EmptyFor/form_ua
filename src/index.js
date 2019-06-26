import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'
import Routes from './routes';
import './index.css';

const history = createBrowserHistory();

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer
    // composeWithDevTools(
    //   applyMiddleware(sagaMiddleware)
    // )
  );

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
