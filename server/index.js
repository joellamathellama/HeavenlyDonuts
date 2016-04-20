const express = require('express');
const Path = require('path');
const bodyParser = require('body-parser');
// Server routes
const routes = express.Router();
// Path
const assetFolder = Path.resolve(__dirname, '../dist');
// Mock Data
const mockData = require('./mockData');

routes.use(express.static(assetFolder));

// routes.get('/bundle.js', function(req,res) {
// 	res.sendFile(assetFolder + '/scripts/bundle.js');
// });

routes.get('/test', function(req, res) {
	res.status(200).json(mockData);
});

// Example route
// routes.get('/', function(req, res) {

// })
// Catch-all route
routes.get('/*', function(req,res) {
	res.sendFile(assetFolder + '/index.html');
});

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use('/', routes);
// Start server
const port = process.env.PORT || 8000;
app.listen(port);
console.log("Express server listening on port: ", port);