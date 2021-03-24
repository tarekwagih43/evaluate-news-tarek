import 'babel-polyfill'
import handleSubmit from '../js/formHandler'

describe('Client Test', () => {
    test('HandleSubmit to be defined', () => {
        expect(handleSubmit()).toBeDefined()
    })
})
