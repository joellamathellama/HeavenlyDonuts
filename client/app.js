// Packages
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
// Components
import {NavHeader} from './containers/navHeader';
import {HomeContainer} from './containers/homeCont';
import {MenuContainer} from './containers/menuCont';
import {LocContainer} from './containers/locationCont';
import {OrderContainer} from './containers/orderCont';
// Store
import {Store} from './store';
const store = Store();
// Sync it with the store
const history = syncHistoryWithStore(browserHistory, store);
// Render the app
ReactDOM.render(
	<Provider store={store}>
			<div>
				<NavHeader/>``
				<Router history={history}>
						<Route path="/" component={HomeContainer}/>
						<Route path="menu" component={MenuContainer}/>
						<Route path="location" component={LocContainer}/>
						<Route path="order" component={OrderContainer}/>
				</Router>
			</div>
	</Provider>,
	document.getElementById('app')
);
