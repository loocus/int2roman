const INT_ROMAN = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

const ROMAN_INT = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}

const mapper = {
  ...INT_ROMAN,
  ...ROMAN_INT
}

export type MapperType = typeof mapper;

export type MapperKey = keyof MapperType;

/**
 * @internal
 * 获取整型数字、罗马数字映射值
 * @param key 有效范围内的整型数字或罗马数字
 * @returns
 */
export function getVal<K extends MapperKey>(key: K): MapperType[K] {
  return mapper[key];
}

export default mapper;
