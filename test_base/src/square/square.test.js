const square = require('./square')

describe('square', () => {
  test('Корректное значения', () => {
    expect(square(2)).toBe(4)
    expect(square(0)).toBe(1)
    expect(square(2)).toBeLessThan(5)
    expect(square(2)).toBeGreaterThan(3)
    expect(square(2)).not.toBeUndefined()

    const spyMathPow = jest.spyOn(Math, "pow")
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })
  test('Корректное значения', () => {
    // необходимо почистить моки(см ниже)
    const spyMathPow = jest.spyOn(Math, "pow")
    square(0)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})