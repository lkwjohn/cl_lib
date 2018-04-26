const sinon = require('sinon')
const chai = require('chai')
const promise = require('promise')
const db = require('../database_config')
const exec = require('child_process').exec
const app 		= require('../app.js');
const expect    = require('chai').expect
const request = require('chai').request
chai.use(require('chai-http'));

before(async function(){
	//setup
	console.log('########## Setting Up ###########')
	db.change_database('development')

})

beforeEach(function () {
  this.sandbox = sinon.sandbox.create()
})

afterEach(function () {
  this.sandbox.restore()
})

after(function(){
	console.log('##########  Tearing Down ###########')
	db.change_database('production')
	// process.exit(0)
})



exports.app = app
exports.expect = expect
exports.chai = chai
