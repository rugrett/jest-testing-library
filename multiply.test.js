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
  
  it('Проверка объекта', () => {
    expect({a: 1}).toStrictEqual({a: 1})
  })
  
  it('Проверка Массива', () => {
    /**
     * Длина Масива
     */
    expect([1, 2, 3]).toHaveLength(3);
    /**
     * Проверка значения в массиве
     */
    expect([1, 2, 3]).toContain(3);
    /**
     * Не будет чего-то
     */
    expect([1, 2, 3]).not.toContain(16);
  })
  
  it('Примитивы', () => {
    const variables = 'lose'

    /**
     * be null
     */
    expect(null).toBeNull();
    
    /**
     * be undefined
     */
    expect(undefined).toBeUndefined();
    
    /**
     * be NaN
     */
    expect(NaN).toBeNaN();
    
    /**
     * существует переменная
     */
    expect(variables).toBeDefined();
    
    /**
     * not null, undefined, NaN or empty string etc.
     */
    expect(variables).toBeTruthy();
  })
})