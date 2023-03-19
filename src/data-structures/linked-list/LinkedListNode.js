/**
 * 链表节点
 */
export class LinkedListNode {
  /**
   * 值
   *
   * @type {*}
   */
  value;

  /**
   * 下一个节点
   *
   * @type {LinkedListNode}
   */
  next;

  /**
   * @param {*} value - 值
   * @param {LinkedListNode} [next=null] - 下一个节点
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @callback CallBack
   * @param {*} value - 值
   * @returns {void}
   */

  /**
   * 转换为字符串
   *
   * @param {CallBack} callback - 回调函数
   * @returns {string} 字符串
   */
  toString(callback) {
    if (typeof callback === 'function') {
      return callback(this.value);
    }

    return this.value.toString();
  }
}

export default LinkedListNode;
