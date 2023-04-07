import { getVal, INT_LIST } from "./mapper";

const digitReg = /^\d*$/;

/**
 * @public
 * Is the parameter a valid integer (excluding 0 and Infinity)
 * @param num Significant digit
 * @returns true or false
 * @example
 * ```ts
 * isInt(1);
 * true
 * ```
 *
 * @example
 * ```ts
 * isInt(0);
 * false
 * ```
 */
export const isInt = (num: unknown) => num as number > 0 && Number.isFinite(num) && digitReg.test(`${num}`);

/**
 * @public
 * Convert valid integer numbers to Roman numerals
 * @param val Integer number
 * @returns Roman numerals
 *
 * @example
 * ```ts
 * romanToInt(1900);
 * 'MCM'
 *
 * ```
 * @example
 * ```ts
 * romanToInt(1);
 * 'I'
 * ```
 *
 * @example
 * ```ts
 * romanToInt(3);
 * 'III'
 * ```
 *
 * @example
 * ```ts
 * romanToInt(9999);
 * 'MMMMMMMMMCMXCIX'
 * ```
 */
export const intToRoman = (val: number) => {
  if (!isInt(val)) throw new TypeError(`Invalid integer number ${val}`);

  let roman = '';
  let i = 0;

  while (i < INT_LIST.length && val !== 0) {
    const item = INT_LIST[i];

    while (val >= item) {
      val -= item;
      roman += getVal(item);
    }

    i++;
  }

  return roman;
};
