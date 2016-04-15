var createStore = require('redux').createStore;
var compose = require('redux').compose;
var applyMiddleware = require('redux').applyMiddleware;
var reducer = require('./reducers/reducer');
var thunk = require('redux-thunk');

module.exports = () => {
  return createStore(reducer, {}, applyMiddleware(thunk.default));
};
