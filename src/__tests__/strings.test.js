import { len, toLower, toUpper } from "../strings";

const LEN_ARRAY = [
  { str: 'Наша машина, была самой красивой', expected: 32 },
  { str: 'Это рекламное предолжение состоит из ....', expected: 41 },
  { str: 'Знаешь', expected: 6 },
]
const LOWER_TXT_ARRAY = [
  { str: 'МАШИНА ЛУЧШАЯ', expected: 'машина лучшая' },
  { str: 'ЛУКАВСТВО САМОЕ СТРАШНОЕ ...', expected: 'лукавство самое страшное ...' },
  { str: 'КРЫЛО', expected: 'крыло' },
]
const UPPER_TXT_ARRAY = [
  { str: 'лучший день', expected: 'ЛУЧШИЙ ДЕНЬ' },
  { str: 'Фамилия Имя Отчество', expected: "ФАМИЛИЯ ИМЯ ОТЧЕСТВО" },
  { str: 'Деловые АвИвалинии', expected: "ДЕЛОВЫЕ АВИВАЛИНИИ" },
]

describe('Строки', () => {
  describe('Длина строки', () => {
    it.each(LEN_ARRAY)('Длина строки "$str": $expected', ({ str, expected }) => {
      expect(len(str)).toBe(expected);
    })
  })
  describe('Перевод строки в Нижний регистр', () => {
    it.each(LOWER_TXT_ARRAY)('Строка "$str" будет: $expected', ({ str, expected }) => {
      expect(toLower(str)).toBe(expected);
    })
  })
  describe('Перевод строки в Верхний регистр', () => {
    it.each(UPPER_TXT_ARRAY)('Строка "$str" будет: $expected', ({ str, expected }) => {
      expect(toUpper(str)).toBe(expected);
    })
  })
})