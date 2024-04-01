import {multiply, divide, sum} from "../math";

const DIVIDE_ARRAY = [
  { input_first: 6, input_second: 3, expected: 2 },
  { input_first: 12, input_second: 3, expected: 4 },
  { input_first: 100, input_second: 10, expected: 10 },
  { input_first: 10, input_second: 0, expected: Infinity },
]
const SUM_ARRAY = [
  { input_first: 6, input_second: 3, expected: 9 },
  { input_first: 12, input_second: 3, expected: 15 },
  { input_first: 100, input_second: 10, expected: 110 },
  { input_first: 10, input_second: 0, expected: 10 },
]
const MULTIPLY_ARRAY = [
  { input_first: 6, input_second: 3, expected: 18 },
  { input_first: 12, input_second: 3, expected: 36 },
  { input_first: 100, input_second: 10, expected: 1000 },
  { input_first: 10, input_second: 0, expected: 0 },
]

describe('Математика', () => {
  describe('divide', () => {
    it.each(DIVIDE_ARRAY)('Деление $input_first на $input_second равно $expected', ({ input_first, input_second, expected }) => {
      const res = divide(input_first, input_second);
      
      expect(res).toBe(expected)
    })
  })

  describe('sum', () => {
    it.each(SUM_ARRAY)('Сложение $input_first и $input_second равно $expected', ({ input_first, input_second, expected }) => {
      const res = sum(input_first, input_second);
      expect(res).toBe(expected)
    })
  })

  describe('multiply', () => {
    it.each(MULTIPLY_ARRAY)('Умножение $input_first на $input_second равно $expected', ({ input_first, input_second, expected }) => {
      const res = multiply(input_first, input_second);
      expect(res).toBe(expected)
    })
  })
})
