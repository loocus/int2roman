import { isRoman, romanToInt } from '../lib/romanToInt';

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

  test('romanToInt 预期返回整数', () => {
    natural.forEach(str => {
      const num = romanToInt(str);
      console.log(`${str} => ${num}`);
      expect(num).toBeGreaterThan(0)
    })
  })
})