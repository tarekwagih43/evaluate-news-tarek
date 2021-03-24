import 'babel-polyfill'
const app = require('../index')
const request = require('supertest')

describe('Post Endpoint /add-url', () => {
    it('Post Endpoint /add-url', async () => {
        const res = await request(app).post('/add-url')
        .send({
            url: 'https://jestjs.io/docs/asynchronous',
        })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })
})