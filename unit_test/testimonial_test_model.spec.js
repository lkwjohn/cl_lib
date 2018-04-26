'use strict'

const common    = require('./unit_test_setup.spec')
const expect    = common.expect
// const fs = require('fs')
// const request = require('request')



const testimonial_m = require('../models/testimonial_m')

describe('The testimonial model', function () {
  it('Retrieving all testimonial content', async function () {
        var result = await testimonial_m.get_testmonial(-1)
        expect(result.rows).to.have.lengthOf(10)
        result.rows.every(i => expect(i).to.have.all.keys('id', 'title', 'cl_month' ,'cl_year', 'page', 'tags', 'description'))
  })

  it('Get size of testimonial in database', async function () {
        var result = await testimonial_m.get_total_number_testimonial()
        expect(result.rows[0].count).to.equal('10')
  })

  it('Get Testimomial using a valid tag id',async function () {
        var result = await testimonial_m.get_testmonial_by_tag(37)
        expect(result.rows).to.have.lengthOf(3)
        result.rows.every(i => expect(i).to.have.all.keys('id', 'title', 'cl_month' ,'cl_year', 'page', 'tags', 'description'))

  })

  it('Get Testimomial using a invalid tag id',async function () {
        var result = await testimonial_m.get_testmonial_by_tag(30)
        expect(result.rows).to.have.lengthOf(0)
  })

  it('Get Testimomial using no tag id',async function () {
        var result = await testimonial_m.get_testmonial_by_tag()
        expect(result).to.equal('Error: tag_id not defined')
  })

  it('Get tags',async function () {
        var result = await testimonial_m.get_testmonial_tag()
        expect(result.rows).to.have.lengthOf(4)
        result.rows.every(i => expect(i).to.have.all.keys('id','tag'))

  })

  it('Get testimonial from a valid search string using CAPS',async function () {
        var result = await testimonial_m.get_testmonial_by_text('MARCH')
        expect(result.rows).to.have.lengthOf(2)
        result.rows.every(i => expect(i).to.have.all.keys('id', 'title', 'cl_month' ,'cl_year', 'page', 'tags', 'description'))

  })

  it('Get testimonial from a valid search string using mix CAPS',async function () {
        var result = await testimonial_m.get_testmonial_by_text('MaRCh')
        expect(result.rows).to.have.lengthOf(2)
        result.rows.every(i => expect(i).to.have.all.keys('id', 'title', 'cl_month' ,'cl_year', 'page', 'tags', 'description'))
  })

    it('Get testimonial with no search string',async function () {
        var result = await testimonial_m.get_testmonial_by_text()
        expect(result).to.equal('Error: text not defined')
  })
})