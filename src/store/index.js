import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import fibonacci from './fibonacci/reducer';

const store = createStore(
  combineReducers({
    fibonacci,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;