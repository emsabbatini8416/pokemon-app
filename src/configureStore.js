import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from '../src/reducers';

export function configureStore() {
  return createStore(createRootReducer(), {}, applyMiddleware(thunk));
}; 