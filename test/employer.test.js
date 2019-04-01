const app = require('../server');
const request = require('supertest')(app);
const expect = require('chai').expect;

const Employer = require('../models/Employer');

const URL_PREFIX = '/api/employer';

describe('GET /api/employer', () => {
  it('Should get all employers', done => {
    request
      .get(`${URL_PREFIX}/`)
      .expect(res => {
        expect(res.body[0].name).to.equal('Mock1');
      })
      .expect(200, done);
  });
});

describe('GET /api/employer/:id', () => {
  it('Should get one employer', done => {
    request
      .get(`${URL_PREFIX}/5ca18126faef881553712c49`)
      .expect(res => {
        expect(res.body._id).to.equal('5ca18126faef881553712c49');
        expect(res.body.name).to.equal('Mock1');
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

describe('POST /api/employer', () => {
  beforeEach(() => {
    // Remove record before recreating.
    Employer.find({ name: 'Mock3' })
      .deleteOne()
      .exec();
  });

  const data = {
    name: 'Mock3',
    website: 'mock3.com',
    headquarters: 'Mock3',
    description: 'Mock3'
  };

  const badData = {
    website: 'mock4.com',
    headquarters: 'Mock4',
    description: 'Mock4'
  };

  it('Should create an employer', done => {
    request
      .post(`${URL_PREFIX}/`)
      .send(data)
      .expect(200, done);
  });

  it('Should return error if no name is provided', done => {
    request
      .post(`${URL_PREFIX}/`)
      .send(badData)
      .expect(400, done);
  });
});
