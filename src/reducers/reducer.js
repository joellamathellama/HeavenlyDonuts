var combineReducers = require('redux').combineReducers;
var routerReducer   = require('react-router-redux').routerReducer;
var test            = require('./testReducer');

// combineReducers function is called to combine all relavent reducers
// and have it connect to the store when the store is creaed
var Reducer = combineReducers({
  test,
  routing: routerReducer
});

module.exports = Reducer;