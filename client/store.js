// Packages
import {createStore, compose, applyMiddleware} from 'redux';
import * as thunk from 'redux-thunk';
import {Reducer} from './reducers/reducer';

const Store = function() {
  return createStore(Reducer, {}, applyMiddleware(thunk.default));
};

module.exports = Store;
