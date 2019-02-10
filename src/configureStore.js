import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [];
  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable no-underscore-dangle, indent */
  // for redux devtools
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}
