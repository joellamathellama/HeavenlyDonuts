const express = require('express')
const Path = require('path')
const bodyParser = require('body-parser')

var routes = express.Router()
  
var assetFolder = Path.resolve(__dirname, '../dist')
routes.use(express.static(assetFolder))

routes.get('/*', function(req,res) {
	res.sendFile(assetFolder + '/index.html');
})

if (process.env.NODE_ENV !== 'test') {
	var app = express()
	app.use(bodyParser.json())
	// app.use(bodyParser.urlencoded({
	//   extended: true
	// }));
	app.use('/', routes)
	// Start server
	var port = process.env.PORT || 8000
	app.listen(port)
	console.log("Express server listening on port: ", port)
}
else {
	module.exports = routes
}