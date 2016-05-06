import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {Order} from './orderReducer';
import {menuList} from "./menuReducer";

// combineReducers function is called to combine all relavent reducers
// and have it connect to the store when the store is creaed
export const Reducer = combineReducers({
  Order,
  menuList,
  routing: routerReducer
});