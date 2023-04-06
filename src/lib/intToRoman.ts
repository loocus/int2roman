import mapper, { getVal, MapperKey } from "./mapper";

/**
 * @public
 * 参数是否是有效整型（不包括 0 和 Infinity）
 * @param num 有效数字
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
export const isInt = (num: unknown) => num !== 0 && Number.isFinite(num) && /^\d*$/.test(`${num as number}`);

/**
 * @public
 * 将有效整型数字转为罗马数字
 * @param val 整型数字
 * @returns 罗马数字
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
  if (!isInt(val)) throw new Error(`Invalid integer number ${val}`);

  let roman = '';

  while (val != 0) {
    if (val >= mapper.M) {
      val -= mapper.M;
      roman += getVal(mapper.M as MapperKey);
    } else if (val >= mapper.CM) {
      val -= mapper.CM;
      roman += getVal(mapper.CM as MapperKey);
    } else if (val >= mapper.D) {
      val -= mapper.D;
      roman += getVal(mapper.D as MapperKey);
    } else if (val >= mapper.CD) {
      val -= mapper.CD;
      roman += getVal(mapper.CD as MapperKey);
    } else if (val >= mapper.C) {
      val -= mapper.C;
      roman += getVal(mapper.C as MapperKey);
    } else if (val >= mapper.XC) {
      val -= mapper.XC;
      roman += getVal(mapper.XC as MapperKey);
    } else if (val >= mapper.L) {
      val -= mapper.L;
      roman += getVal(mapper.L as MapperKey);
    } else if (val >= mapper.XL) {
      val -= mapper.XL;
      roman += getVal(mapper.XL as MapperKey);
    } else if (val >= mapper.X) {
      val -= mapper.X;
      roman += getVal(mapper.X as MapperKey);
    } else if (val >= mapper.IX) {
      val -= mapper.IX;
      roman += getVal(mapper.IX as MapperKey);
    } else if (val >= mapper.V) {
      val -= mapper.V;
      roman += getVal(mapper.V as MapperKey);
    } else if (val >= mapper.IV) {
      val -= mapper.IV;
      roman += getVal(mapper.IV as MapperKey);
    } else if (val >= mapper.I) {
      val -= mapper.I;
      roman += getVal(mapper.I as MapperKey);
    }
  }

  return roman;
};
