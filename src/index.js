// packages
var React          = require('react');
var ReactDOM       = require('react-dom');
var ReactRouter    = require('react-router');
var Router         = ReactRouter.Router;
var Route          = ReactRouter.Route;
// components
var NavHeader			 = require('./NavHeader');
var Home					 = require('./containers/homePage');
var Menu 					 = require('./containers/menu');
var Location 			 = require('./containers/ourLocation');
// require store
var Provider       = require('react-redux').Provider;
var store          = require('./store')();
// require history and sync it with the store
var syncHiStore    = require('react-router-redux').syncHistoryWithStore;
var browserHistory = ReactRouter.browserHistory;
var history        = syncHiStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={NavHeader}/>
				<Route path="/home" component={Home}/>
				<Route path="menu" component={Menu}/>
				<Route path="location" component={Location}/>
			</Router>
	</Provider>,
	document.getElementById('app')
);