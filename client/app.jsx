// Packages
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
// Components
import {NavHeader} from './navbar/header.container.jsx';
import {HomeContainer} from './home/home.container.jsx';
import {MenuContainer} from './menu/menu.container.jsx';
import {LocContainer} from './location/location.container.jsx';
import {OrderContainer} from './order/order.container.jsx';
// Store
const store = require('./store.js')();
// import {Store} from './store';
// const store = Store();
// Sync it with the store
const history = syncHistoryWithStore(browserHistory, store);
// Render the app
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={NavHeader}>
				<IndexRoute component={HomeContainer}/>
				<Route path="menu" component={MenuContainer}/>
				<Route path="location" component={LocContainer}/>
				<Route path="order" component={OrderContainer}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
