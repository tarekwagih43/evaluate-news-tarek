import CheckURL from '../js/checkURL'

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(CheckURL()).toBeDefined()
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        let url = 'test false'
        expect(CheckURL(url)).toBeFalsy()
    })

    test('Testing the checkUrl function return true for valid url', () => {
        let url = 'http://text.test'
        expect(CheckURL(url)).toBeTruthy()
    })
})
