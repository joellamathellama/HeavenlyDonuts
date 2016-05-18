const express = require('express');
const menuRoutes = express.Router();
const menu = require('../apis/menu');

module.exports = menuRoutes;


menuRoutes.get('/', function(req, res) {
	menu.menuList()
		.then(function(data){
			res.status(200).json({data: data});
		})
		.catch(function(err){
			res.status(500).send('Something failed!');
		})

})