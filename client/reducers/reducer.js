import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {Test} from './testReducer';

// combineReducers function is called to combine all relavent reducers
// and have it connect to the store when the store is creaed
export const Reducer = combineReducers({
  Test,
  routing: routerReducer
});