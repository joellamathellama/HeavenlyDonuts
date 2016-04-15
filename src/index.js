// packages
var React          = require('react');
var ReactDOM       = require('react-dom');
var ReactRouter    = require('react-router');
var Router         = ReactRouter.Router;
var Route          = ReactRouter.Route;
// components
var Home					 = require('./containers/homePage');
// require store
var Provider       = require('react-redux').Provider;
var Store          = require('./store');
var store          = Store();
// require history and sync it with the store
var syncHiStore    = require('react-router-redux').syncHistoryWithStore;
var browserHistory = ReactRouter.browserHistory;
var history        = syncHiStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route name="Home" path="/" component={Home}/>
		</Router>
	</Provider>,
	document.getElementById('app')
);