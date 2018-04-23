'use strict';

const { Pool } = require('pg')

var config = {
  user: 'postgres',
  host: '54.169.89.109',
  database: 'cllib',
  password: 'An1wNian',
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 3000
  }

var config_dev = {
  user: 'postgres',
  host: '54.169.89.109',
  database: 'cllib_dev',
  password: 'An1wNian',
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 3000
  }

var pool = new Pool(config);

var change_database = function(environment){
	if(environment === 'production'){
		pool = new Pool(config)
	}
	else{
		pool = new Pool(config_dev)
	}
}

var get_config = function(){
	return 0
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  query_text_only: (text,) => pool.query(text),
  change_database: (text) =>change_database(text)
}