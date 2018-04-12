'use strict';

const express		= require('express')
const router 		= express.Router()
const testimonial_m = require('../models/testimonial_m')

// router.use(function timeLog (req, res, next) {
// 	next()
// })


router.get('/get_all', async function (req, res, next) {
	console.log('Request URL:', req.originalUrl)
	var response = await testimonial_m.get_testmonial()
	return res.json({'success': true, 'data': response['rows']})
})


router.use(express.static('routes'));
module.exports = router