'use strict';

const fs = require('fs')
// const request = require('request')

const expect = require('chai').expect

const testimonial_m = require('../models/testimonial_m')

const db = require('../database_config')

describe('The testimonial model', function () {
  it('retrieving all testimonial content', async function () {

    db.change_database('development')

    // var callback = this.sandbox.spy(-1, get_testmonial);
    var result = await testimonial_m.get_testmonial(1);
    console.log(result.rows)

    // var all_testimonial = this.sandbox.spies(0, 'get_testmonial')

    // const url = 'google.com'
    // const content = '<h1>title</h1>'
    // const writeFileStub = this.sandbox.stub(fs, 'writeFile', function (filePath, fileContent, cb) {
    //   cb(null)
    // })

    // const requestStub = this.sandbox.stub(request, 'get', function (url, cb) {
    //   cb(null, null, content)
    // })

    // const result = yield webpage.saveWebpage(url)

    // expect(writeFileStub).to.be.calledWith()
    // expect(requestStub).to.be.calledWith(url)
    // expect(result).to.eql('page')
  })
})