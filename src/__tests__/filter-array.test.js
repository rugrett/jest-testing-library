import { basketWithNoQuantity, filteredBasketWithNoQuantityOnly } from "../__mocks__/basket.mock";
import { filterArray } from "../filter-array";

const cb = jest.fn();
// const logSpy = jest.spyOn(console, 'log');

describe('Фильтрация Массива', () => {
  
  /**
   * Обнуляем мок данные, после каждого выполнения тест
   * это изолирует каждый послед, тест кейс
   * без него функция с 0 вызовов, выдаст ошибку, так как предыдущий кейс насчитает 3 вызова
   */
  afterEach(() => {
    jest.clearAllMocks()
  })
  
  it('Функция вызвано столько, сколько длина массива', () => {
    const arr = [1, 2, 3];
    
    filterArray(arr, cb);
    
    expect(cb).toHaveBeenCalledTimes(arr.length);
    // expect(logSpy).toHaveBeenCalledTimes(arr.length);
  })

  it('не вызвано cb, если массив пустой', () => {
    filterArray([], cb);
    
    expect(cb).not.toHaveBeenCalled();
    // expect(logSpy).not.toHaveBeenCalled();
  })
  
  it('Массив будет отфильтрован без нулевых заказов', () => {
    const hasQuantity = (order) => order.qty > 0;
    
    const result = filterArray(basketWithNoQuantity, hasQuantity);
    
    expect(result).toEqual(filteredBasketWithNoQuantityOnly);
    // expect(logSpy).toHaveBeenCalledTimes(basketWithNoQuantity.length);
  });
})
