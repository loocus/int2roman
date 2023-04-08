import { isRoman, romanToInt } from '../lib/romanToInt';
import { INT_LIST, ROMAN_LIST } from '../lib/mapper';

describe('romanToInt', () => {
  const natural = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
    'III',
    'II',
    'VI',
    'X',
    'XX',
    'XXX',
    'MMC',
    'LX',
    'CX',
    'LXXX'
  ];

  const unNatural = [
    'a',
    '1',
    'Mc',
    'Mm',
    'XXXX',
    'LLX',
    'XCCCC'
  ];

  test('isRoman 预期返回 true', () => {
    natural.forEach(str => expect(isRoman(str)).toBeTruthy());
  });

  test('isRoman 预期返回 false', () => {
    unNatural.forEach(str => expect(isRoman(str)).toBeFalsy());
  });

  test('romanToInt 预期返回大于 0 的整数', () => {
    natural.forEach(str => {
      const num = romanToInt(str);
      console.log(`${str} => ${num}`);
      expect(num).toBeGreaterThan(0)
    })
  });

  test('内部罗马数字预期映射为对应阿拉伯数字', () => {
    ROMAN_LIST.forEach((roman, i) => expect(romanToInt(roman)).toBe(INT_LIST[i]))
  })
})