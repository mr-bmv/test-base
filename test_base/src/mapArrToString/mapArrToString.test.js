const mapArrToString = require('./mapArrToString')

describe('mapArrToString', () => {
  test('Корректное значения', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"])
  })
  test('Мешанина', () => {
    expect(mapArrToString([1, 2, 3, 'asdf', null, undefined, [5, 6]])).toEqual(["1", "2", "3"])
    expect(mapArrToString(['asdf', null, undefined, [5, 6]])).toEqual([])
  })
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([])
  })
  test('Строковый массив', () => {
    expect(mapArrToString(['1', '2', '3'])).toEqual([])
  })
  test('Строковый массив - отрицание', () => {
    expect(mapArrToString(['1', '2', '3'])).not.toEqual(["1", "2", "3"])
  })
})