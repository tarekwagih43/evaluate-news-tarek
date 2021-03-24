import 'babel-polyfill'
const app = require('../index')
const request = require('supertest')

describe('Post Endpoint /add-url', () => {
    it('renders without crashing', () => {
        beforeEach(async (done) => {
            const res = await request(app)
                .post('/add-url')
                .send({ url: 'https://jestjs.io/docs/asynchronous' })
        })
        afterAll(async done => {
            await expect(res.statusCode).toEqual(201)
            await expect(res.body).toHaveProperty('post')
        })
    })
})
