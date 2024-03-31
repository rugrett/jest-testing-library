describe('basic test', () => {
  describe('Object', () => {
    it('Проверка объекта', () => {
      expect({a: 1}).toStrictEqual({a: 1})
    })
  })
  
  describe('Array', () => {
    it('Длина Масива', () => {
      expect([1, 2, 3]).toHaveLength(3);
    })
    it('Проверка значения в массиве', () => {
      expect([1, 2, 3]).toContain(3);
    })
    it('Не будет чего-то', () => {
      expect([1, 2, 3]).not.toContain(16);
    })
  })

  describe('Примитивы', () => {
    const variables = 'lose'

    it('be null', () => {
      expect(null).toBeNull();
    })

    it('be undefined', () => {
      expect(undefined).toBeUndefined();
    })

    it('существует переменная', () => {
      expect(variables).toBeDefined();
    })

    it('be NaN', () => {
      expect(NaN).toBeNaN();
    })

    it('not null, undefined, NaN or empty string etc.', () => {
      expect(variables).toBeTruthy();
    })
  })
})