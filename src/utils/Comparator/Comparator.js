import { CompareState } from './CompareState.js';

/**
 * 对比类
 */
export class Comparator {
  /**
   * @function compareFunc
   * @param {*} pre - 前一个值
   * @param {*} next - 后一个值
   * @return {CompareState} - 比较结果
   */

  /**
   * 比较函数
   *
   * @type {CompareFunc}
   */
  #compare;

  /**
   * @param {CompareFunc} [compareFunc] - 比较函数
   */
  constructor(compareFunc) {
    this.#compare = compareFunc ?? Comparator.defaultCompareFunc;
  }

  /**
   * 默认比较函数
   *
   * @type {CompareFunc}
   */
  static defaultCompareFunc(pre, next) {
    if (pre === next) {
      return CompareState.equal;
    }

    return pre < next ? CompareState.lessThan : CompareState.greaterThan;
  }

  /**
   * 检测两个变量相等
   *
   * @type {CompareFunc}
   */
  equal(pre, next) {
    return this.#compare(pre, next) === CompareState.equal;
  }

  /**
   * 检测前一个变量小于后一个变量
   *
   * @type {CompareFunc}
   */
  lessThan(pre, next) {
    return this.#compare(pre, next) === CompareState.lessThan;
  }

  /**
   * 检测前一个变量大于后一个变量
   *
   * @type {CompareFunc}
   */
  greaterThan(pre, next) {
    return this.#compare(pre, next) === CompareState.greaterThan;
  }
}

export default Comparator;
