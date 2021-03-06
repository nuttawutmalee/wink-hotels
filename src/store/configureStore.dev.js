import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(createLogger()));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
