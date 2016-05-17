import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {Order} from './order/order.reducer.js';
import {menuList} from "./menu/menu.reducer.js";

// combineReducers function is called to combine all relavent reducers
// and have it connect to the store when the store is created
export const Reducer = combineReducers({
  Order,
  menuList,
  routing: routerReducer
});