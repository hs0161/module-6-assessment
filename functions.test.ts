const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("returns an array", () => {
        expect(shuffleArray("arrCopy")).toBeTruthy()
    })
    test("return an array of the same length", () => {
        expect(['a', 'b', 'c']).toHaveLength(3)
    })
})