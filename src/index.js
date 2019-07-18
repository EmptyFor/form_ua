import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'
import Routes from './routes';
import './assets/fonts/AdvenirNext/advenir-next.css'
import './reset.css';
import './index.css';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);


