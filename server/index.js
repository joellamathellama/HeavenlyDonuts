const express = require('express')
const Path = require('path')
const bodyParser = require('body-parser')
// Server routes
var routes = express.Router()
// Path
var assetFolder = Path.resolve(__dirname, '../dist')
routes.use(express.static(assetFolder))

routes.get('/bundle.js', function(req,res) {
	res.sendFile(assetFolder + '/scripts/bundle.js')
})
// Example route
// routes.get('/', function(req, res) {

// })
// Catch-all route
routes.get('/*', function(req,res) {
	res.sendFile(assetFolder + '/index.html')
})

var app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use('/', routes)
// Start server
var port = process.env.PORT || 8000
app.listen(port)
console.log("Express server listening on port: ", port)