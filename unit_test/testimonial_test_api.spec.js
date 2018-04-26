'use strict'

const common 	= require('./unit_test_setup.spec')
const app       = common.app
const chai    = common.chai
const expect 	= common.expect;

describe('The testimonial APIs', function () {
  it('Retrieving all testimonial content', function () {
        return chai.request(app)
		.post('/testimonial/get_all')
		.send({
	    	"pagination": "-1"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.size).to.be.a('string');
		    expect(res.body.data).to.have.length(10)
		    res.body.data.every(i => expect(i).to.have.all.keys('id','title', 'cl_month', 'cl_year', 'page', 'tags', 'description'))
		});
  })

  it('Retrieving all testimonial content with pagination as 0', function () {
        return chai.request(app)
		.post('/testimonial/get_all')
		.send({
	    	"pagination": "0"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.size).to.be.a('string');
		    expect(res.body.data).to.have.length(10)
		    res.body.data.every(i => expect(i).to.have.all.keys('id','title', 'cl_month', 'cl_year', 'page', 'tags', 'description'))
		});
  })

  it('Retrieving all testimonial content with pagination as 1', function () {
        return chai.request(app)
		.post('/testimonial/get_all')
		.send({
	    	"pagination": "1"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.size).to.be.a('string');
		    expect(res.body.data).to.have.length(0)
		    res.body.data.every(i => expect(i).to.have.all.keys('id','title', 'cl_month', 'cl_year', 'page', 'tags', 'description'))
		});
  })

  it('Retrieving a list of tags', function () {
        return chai.request(app)
		.get('/testimonial/get_tags')
		// .send({})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.data).to.have.length(4)
		    res.body.data.every(i => expect(i).to.have.all.keys('id','tag'))
		});
  })

  it('Get testimonial by tag id', function () {
        return chai.request(app)
		.post('/testimonial/get_testmonial_by_tag')
		.send({
			"id": "37"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.data).to.have.length(3)
		    res.body.data.every(i => expect(i).to.have.all.keys('id','title', 'cl_month', 'cl_year', 'page', 'tags', 'description'))
		});
  })

  it('Get testimonial by tag id with empty id', function () {
        return chai.request(app)
		.post('/testimonial/get_testmonial_by_tag')
		.send({
			"id": ""
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(false);
		    expect(res.body.data).to.be.a('string');
		    expect(res.body.data).to.equal('invalid parameters')
		});
  })

  it('Get testimonial by tag id with non-existing id', function () {
        return chai.request(app)
		.post('/testimonial/get_testmonial_by_tag')
		.send({
			"id": "30"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.data).to.have.length(0)
		});
  })

  it('Get testimonial by tag id with wrong param', function () {
        return chai.request(app)
		.post('/testimonial/get_testmonial_by_tag')
		.send({
			"id_wrong": "30"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(false);
		    expect(res.body.data).to.be.a('string');
		    expect(res.body.data).to.equal('Undefined parameter: id');
		});
  })

  it('Search for testimonial with wrong param', function () {
        return chai.request(app)
		.post('/testimonial/search')
		.send({
			"text_wrong": ""
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(false);
		    expect(res.body.data).to.be.a('string');
		    expect(res.body.data).to.equal('Undefined parameter: search_text');
		});
  })

  it('Search for testimonial with valid search string in CAPS', function () {
        return chai.request(app)
		.post('/testimonial/search')
		.send({
			"search_text": "MARCH"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.data).to.have.length(2)
		});
  })

  it('Search for testimonial with valid search string with mix CAPS', function () {
        return chai.request(app)
		.post('/testimonial/search')
		.send({
			"search_text": "ApRil"
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(true);
		    expect(res.body.data).to.be.a('array');
		    expect(res.body.data).to.have.length(2)
		});
  })

  it('Search for testimonial with empty string', function () {
        return chai.request(app)
		.post('/testimonial/search')
		.send({
			"search_text": ""
		})
		.then(function(res) {
		    expect(res).to.have.status(200);
		    expect(res).to.be.json;
		    expect(res.body).to.be.an('object');
		    expect(res.body.success).to.be.a('boolean')
		    expect(res.body.success).to.equal(false);
		    expect(res.body.data).to.be.a('string');
		    expect(res.body.data).to.equal('invalid parameters')
		});
  })
})

