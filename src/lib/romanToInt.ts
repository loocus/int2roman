import mapper, { MapperKey } from './mapper'

/**
 * @public
 * 参数是否是罗马字符串
 * @param str 字符参数
 * @returns true or false
 * @example
 * ```ts
 * isRoman('III');
 * true
 * ```
 *
 * @example
 * ```ts
 * isRoman('IIII');
 * false
 * ```
 */
export const isRoman = (str: string) => /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(str);

/**
 * @public
 * 将有效罗马数字转为整型数字
 * @param str 需要转换的字符串
 * @returns 整型数字
 * @example
 * ```ts
 * romanToInt('MCM');
 * 1900
 *
 * ```
 * @example
 * ```ts
 * romanToInt('I');
 * 1
 * ```
 *
 * @example
 * ```ts
 * romanToInt('III');
 * 3
 * ```
 *
 * @example
 * ```ts
 * romanToInt('MMMMMMMMMCMXCIX');
 * 9999
 * ```
 */
export const romanToInt = (str: string) => {
  if (!isRoman(str)) throw new TypeError(`Invalid Roman character ${str}`);

  let val = 0;
  const len = str.length;

  for (let i = 0; i < len; i++) {
    const a = mapper[str[i] as MapperKey];
    const b = mapper[str[i + 1] as MapperKey];

    if (i < len - 1 && a < b) {
      val -= a as number;
    } else {
      val += a as number;
    }
  }

  return val;
}