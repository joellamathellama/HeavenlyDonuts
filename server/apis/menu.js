const db = require('../db.js');
const Promise = require('bluebird');

module.exports = {
	menuList() {
		return db('menu').select('*')
			.then(function(data){
				return data || Promise.reject(new Error('test call failed'));
			})
	}
}
