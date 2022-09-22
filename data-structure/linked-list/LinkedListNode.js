/**
 * 链表节点
 */
export default class LinkedListNode {
  /**
   * @param {*} value - 值
   * @param {*} [next=null] - 下一个节点
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @callback callback
   * @param {*} value - 值
   * @returns {void}
   */

  /**
   * 转换为字符串
   *
   * @param {callback} callback - 回调函数
   * @returns {string} - 字符串
   */
  toString(callback) {
    if (typeof callback === 'function') {
      return callback(this.value);
    }

    return this.value.toString();
  }
}

export { LinkedListNode };
