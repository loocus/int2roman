/**
 * @internal
 */
export const INT_LIST = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

/**
 * @internal
 */
export const ROMAN_LIST = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const map = new Map<string | number, string | number>();

INT_LIST.forEach((key, i) => map.set(key, ROMAN_LIST[i]));

ROMAN_LIST.forEach((key, i) => map.set(key, INT_LIST[i]));

/**
 * @internal
 */
export function getVal<K extends number | string>(key: K)  {
  return map.get(key) as K extends number ? string : number;
}
