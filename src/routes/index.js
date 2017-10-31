const { Router } = require('express')

module.exports = ({ config }) => {
	let routes = Router();

	/* GET home page. */
	router.get('/', (req, res, next) => {
		res.sendFile('./../public/index.html')
	});

	return routes
}