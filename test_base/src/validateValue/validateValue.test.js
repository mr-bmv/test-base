const validateValue = require('./validateValue')



describe('validateValue', () => {
  test('Корректное значения', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Меньше допустимого значения', () => {
    expect(validateValue(-50)).toBe(false)
  })
  test('Больше допустимого значения', () => {
    expect(validateValue(150)).toBe(false)
  })
  test('Граничное значения снизу', () => {
    expect(validateValue(0)).toBe(true)
  })
  test('Граничное значения сверху', () => {
    expect(validateValue(100)).toBe(true)
  })
})