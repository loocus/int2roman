import { getVal } from './mapper'

const romanReg = /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

/**
 * @public
 * Is the parameter a Roman string
 * @param str Character parameters
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
export const isRoman = (str: string) => romanReg.test(str);

/**
 * @public
 * Convert a valid Roman numerals to an integer
 * @param str String to be converted
 * @returns Integer number
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
  let i = 0;

  while (i < str.length - 1) {
    const a = getVal(str[i]);
    const b = getVal(str[i + 1]);

    if (a < b) {
      val -= a;
    } else {
      val += a;
    }

    i++;
  }

  val += getVal(str[i])

  return val;
}