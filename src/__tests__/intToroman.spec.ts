import { isInt, intToRoman } from '../lib/intToRoman';
import { ROMAN_LIST, INT_LIST } from '../lib/mapper';

describe('intToRoman', () => {
  test('isInt 预期返回 true', () => {
    expect(isInt(1)).toBeTruthy();
    expect(isInt(9999)).toBeTruthy()
  });

  test('isInt 预期返回 false', () => {
    expect(isInt(0)).toBeFalsy();
    expect(isInt(Infinity)).toBeFalsy();
  });

  test('intToRoman 预期返回被转换罗马数字', () => {
    const map = new Map<number, string>();
    map
      .set(9, 'IX')
      .set(11, 'XI')
      .set(13, 'XIII')
      .set(10000, 'MMMMMMMMMM')
      .set(141, 'CXLI')
      .set(404, 'CDIV')
      .set(11111, 'MMMMMMMMMMMCXI')
      .set(999, 'CMXCIX')
      .set(9999, 'MMMMMMMMMCMXCIX');

    console.log(map);
    map.forEach((value, key) => {
      console.log(`${key} => ${intToRoman(key)}`)
      expect(intToRoman(key)).toEqual(value);
    })
  })

  test('内部阿拉伯数字预期映射为对应罗马数字', () => {
    INT_LIST.forEach((integer, i) => expect(intToRoman(integer)).toBe(ROMAN_LIST[i]));
  })
})