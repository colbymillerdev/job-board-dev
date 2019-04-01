const app = require('../server');
const request = require('supertest')(app);
const expect = require('chai').expect;

const JobDescription = require('../models/JobDescription');

const URL_PREFIX = '/api/job-description';

describe('GET /api/job-description', () => {
  it('Should get all job descriptions', done => {
    request
      .get(`${URL_PREFIX}/`)
      .expect(res => {
        expect(res.body[0].jobTitle).to.exist;
      })
      .expect(200, done);
  });
});

describe('GET /api/job-description/:id', () => {
  it('Should get one job description', done => {
    request
      .get(`${URL_PREFIX}/5ca18136faef881553712c4a`)
      .expect(res => {
        expect(res.body._id).to.equal('5ca18136faef881553712c4a');
        expect(res.body.jobTitle).to.equal('Mock1');
      })
      .expect(200, done);
  });

  it('Should return not found if no id exists', done => {
    request
      .get(`${URL_PREFIX}/nonexistingid`)
      .expect(res => {
        expect(res.body.notfound).to.exist;
      })
      .expect(404, done);
  });
});

describe('POST /api/job-description', () => {
  const data = {
    jobTitle: 'Mock3',
    jobAppUrl: 'mock3.com',
    empId: '1'
  };

  const badData = {
    jobAppUrl: 'mock4.com',
    empId: '1'
  };

  it('Should create an employer', done => {
    request
      .post(`${URL_PREFIX}/`)
      .send(data)
      .expect(200, done);
  });

  it('Should return error if no job title is provided', done => {
    request
      .post(`${URL_PREFIX}/`)
      .send(badData)
      .expect(400, done);
  });
});
