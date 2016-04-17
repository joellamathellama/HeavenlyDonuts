import {createStore, compose, applyMiddleware} from 'redux';
import * as thunk from 'redux-thunk';
import {Reducer} from './reducers/reducer';
// export a function for creating a store
export const Store = function() {
  return createStore(Reducer, {}, applyMiddleware(thunk.default));
};
