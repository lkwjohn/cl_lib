'use strict';

const express		= require('express')
const router 		= express.Router()
const testimonial_m = require('../models/testimonial_m')

/**
*
* Function: Retrieving list of testimonial 
*
**/
router.get('/get_all', async function (req, res, next) {
	var testimonial = await testimonial_m.get_testmonial()
	testimonial = testimonial['rows']

	return res.json({'success': true, 'data': testimonial})
})

/**
*
* Function: Retrieving list of tags
*
**/
router.get('/get_tags', async function (req, res, next) {
	var testimonial = await testimonial_m.get_testmonial_tag()

	return res.json({'success': true, 'data': testimonial['rows']})
})

/**
*
* Function: Retrieving list of testimonial based on tag name
*
**/
router.post('/get_testmonial_by_tag', async function (req, res, next) {
	var tag_id = req.body.id;
	var testimonial = await testimonial_m.get_testmonial_by_tag(tag_id)

	return res.json({'success': true, 'data': testimonial['rows']})
})

router.use(express.static('routes'));
module.exports = router