import LinkedListNode from './LinkedListNode';
import { Comparator } from '../../utils/Comparator';

/**
 * 链表
 */
export class LinkedList {
  /**
   * 链表头节点
   *
   * @member {LinkedListNode}
   */
  head = null;

  /**
   * 链表尾节点
   *
   * @member {LinkedListNode}
   */
  tail = null;

  /**
   * 比较函数
   *
   * @member {Comparator}
   */
  compare;

  /**
   * @param {CompareFunc} [comparatorFunc]
   */
  constructor(comparatorFunc) {
    this.compare = new Comparator(comparatorFunc);
  }

  /**
   * 向前添加节点
   *
   * @param {*} value - 值
   * @returns {LinkedList} 链表
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * 添加节点
   *
   * @param {*} value - 值
   * @returns {LinkedList} 链表
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      // 空链表
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
}
