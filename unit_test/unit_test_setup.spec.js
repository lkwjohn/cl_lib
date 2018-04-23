const sinon = require('sinon')
const chai = require('chai')
const db = require('../database_config')

before(function(){
	//setup
	db.change_database('development')
	db.query("INSERT INTO testimonial (title, cl_month, cl_year, page, description) VALUES('title1', 4, 2017, 10, 'testimonial about ymd')")
})

beforeEach(function () {
  this.sandbox = sinon.sandbox.create()
})

afterEach(function () {
  this.sandbox.restore()
})

after(function(){
	//tear down
	// db.query("DELETE FROM testimonial")
	db.query("DELETE FROM tag")
	db.query("DELETE FROM testimonial_tag_mapping")
})