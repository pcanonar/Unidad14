const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  it('Debe obtener el listado de doctores (status 200)', (done) => {
    request(app)
      .get('/doctores')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
