import CheckURL from '../js/checkURL'

describe('Function if Defined or not', () => {
    test('checkUrl function defined or not', () => {
        expect(CheckURL()).toBeDefined()
    })

})

describe('Test Response Value', () => {
    test('function return false for invalid url', () => {
        let url = 'test false'
        expect(CheckURL(url)).toBeFalsy()
    })

    test('checkUrl function return true for valid url', () => {
        let url = 'http://text.test'
        expect(CheckURL(url)).toBeTruthy()
    })
})