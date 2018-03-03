const server = require('../server')
const request = require('supertest')

describe('JSON time API server', () => {
  before(() => {
    server.create(3000)
  })

  after(() => {
    server.close()
  })

  describe('/api/parsetime', () => {
    it ('should return parsetime',(done) => {
      request('http://localhost:3000')
        .get('/api/parsetime?iso=2018-03-03T09:10:15.474Z')
        .expect('Content-Type', /json/)
        .expect(200, {
          hour: 18,
          minute: 10,
          second: 15
        },done) 
    })
    it ('should return unixtime',(done) => {
      request('http://localhost:3000')
        .get('/api/unixtime?iso=2018-03-03T09:10:15.474Z')
        .expect('Content-Type', /json/)
        .expect(200, {
          unixtime: 1520068215474
        },done)
    })
  })
  describe('/api/unixtime', () => {
    it ('should return parsetime, even not have parameter',(done) => {
      request('http://localhost:3000')
        .get('/api/parsetime')
        .expect('Content-Type', /json/)
        .expect(200, done) 
    })
    it ('should return unixtime, even not have parameter',(done) => {
      request('http://localhost:3000')
        .get('/api/unixtime')
        .expect('Content-Type', /json/)
        .expect(200, done) 
    })
  })
})
