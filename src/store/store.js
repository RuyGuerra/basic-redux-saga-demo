import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import searchSaga from './sagas/searchSaga';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [ sagaMiddleware ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(searchSaga);

export default store;
