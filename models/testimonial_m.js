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
		return db.query('SELECT * FROM testimonial;')
	}
	catch(e){
		console.log(e.toString());
		return e.toString();
	}
}