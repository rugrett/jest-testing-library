import {multiply} from "./multiply";

describe('multiply', () => {
  it('Умножение положительных чисел', () => {
    // AAA - arrange, act, assert
    // AAA - Подготовка данных, действие и сравнение.
    const res = multiply(1, 2);

    expect(res).toBe(2)
  })
  
  it('Умножение отрицательных чисел', () => {
    const res = multiply(-1, -2);
    
    expect(res).toBe(2)
  })
  
  it('Умножение отрицательных и положительных чисел', () => {
    const res = multiply(-2, 2);
    
    expect(res).toBe(-4)
  })
})