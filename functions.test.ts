const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('get an array as a return', () => {
        let array = [0,1,2,3,4]
        let result = shuffleArray(array)
        expect(result).toHaveProperty('length')
    })
    test('return an array of all the same items', () => {
        let array = [0,1,2,3,4]
        let result = shuffleArray(array)
        expect(result.length).toEqual(array.length)
    })
})

