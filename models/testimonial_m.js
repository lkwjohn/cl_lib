'use strict';

const db 		= require('../database_config')

/**
*
* Function: Retrieving list of testimonial
*
* @param
*
* @returns {(String|pool.Result)} 
**/
exports.get_testmonial = function(){
	try{
		return db.query('SELECT t.id, t.title, t.cl_year, t.cl_month, t.page, array_agg(g.tag) as tags FROM testimonial t LEFT JOIN testimonial_tag_mapping m ON t.id = m.testimonial_id JOIN tag g ON m.tag_id = g.id GROUP BY t.id;')
	}
	catch(e){
		console.log(e.toString());
		return e.toString();
	}
}

/**
*
* Function: Retrieving list of testimonial based on tag name
*
* @param
*
* @returns {(String|pool.Result)} 
**/
exports.get_testmonial_by_tag = function(tag_id){
	try{
		return db.query('SELECT t.id, t.title, t.cl_year, t.cl_month, t.page, array_agg(g.tag) as tags FROM testimonial t LEFT JOIN testimonial_tag_mapping m ON t.id = m.testimonial_id JOIN tag g ON m.tag_id = g.id WHERE t.id IN (SELECT t.id FROM testimonial t LEFT JOIN testimonial_tag_mapping m ON t.id = m.testimonial_id JOIN tag g ON m.tag_id = g.id WHERE g.id = $1 GROUP BY t.id) GROUP BY t.id;', [tag_id])
	}
	catch(e){
		console.log(e.toString());
		return e.toString();
	}
}

/**
*
* Function: Retrieving list tags
*
* @param
*
* @returns 
* @array 
**/
exports.get_testmonial_tag = function(){
	try{
		return db.query(
			'SELECT * FROM tag;')
	}
	catch(e){
		console.log(e.toString());
		return e.toString();
	}
}