// Packages
const express     = require('express');
const Path        = require('path');
const bodyParser  = require('body-parser');
// app
const app = express();
// Database
const db 					= require('./db');
// Server routes
const routes      = express.Router();
// Path
const assetFolder = Path.resolve(__dirname, '../dist');

routes.use(express.static(assetFolder));

// routes.get('/bundle.js', function(req,res) {
// 	// console.log("/bundle called: ", assetFolder + '/scripts/bundle.js');
// 	res.sendFile(assetFolder + '/scripts/bundle.js');
// });

routes.use(function(req, res, next) {
	console.log("bodyParser json");
	bodyParser.json();
	next();
})

routes.use(function(req, res, next) {
	console.log("bodyParser urlencoded");
	bodyParser.urlencoded({
		extended: true
	});
	next();
})

routes.get('/test', function(req, res) {
	console.log("test call");
});

routes.get('/travolta', function(req, res) {
	res.sendFile(Path.resolve(__dirname, '../images/travolta.gif'));
});

const menuRoutes  = require('./routes/menu');
routes.use('/menuList', menuRoutes);

// Example route
// routes.get('/', function(req, res) {

// })

// Catch-all route
routes.get('/*', function(req,res) {
	// console.log("/* called: ", assetFolder + '/index.html');
	res.sendFile(assetFolder + '/index.html');
});

app.use('/', routes);
// Start server
const port = process.env.PORT || 8000;
app.listen(port);
console.log("Environment: ", process.env.NODE_ENV);
console.log("Express server listening on port: ", port);