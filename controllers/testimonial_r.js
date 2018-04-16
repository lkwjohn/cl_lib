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
	var tag_id = req.body.id
	if(tag_id == ''){
		return res.json({'success': false, 'data': 'invalid parameters'})
	}

	var testimonial = await testimonial_m.get_testmonial_by_tag(tag_id)

	return res.json({'success': true, 'data': testimonial['rows']})
})


router.post('/search', async function (req, res, next) {
	var search_text = req.body.search_text
	console.log( search_text)
	
	if(search_text == ''){
		return res.json({'success': false, 'data': 'invalid parameters'})
	}

	var testimonial = await testimonial_m.get_testmonial_by_text(search_text.toLowerCase())
	console.log(testimonial['rows'])
	return res.json({'success': true, 'data': testimonial['rows']})
})

router.use(express.static('routes'))
module.exports = router