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
   * 向链表头部插入节点
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

  /**
   * 插入节点到指定索引
   *
   * @param {*} value - 值
   * @param {number} rawIndex - 索引
   * @returns {LinkedList} 链表
   */
  insert(value, rawIndex) {
    const index = rawIndex >= 0 ? rawIndex : 0;

    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let currentNode = this.head;
      const newNode = new LinkedListNode(value);

      while (currentNode) {
        if (count === index) {
          break;
        }

        currentNode = currentNode.next;
        ++count;
      }

      if (currentNode) {
        // 插入指定索引之后
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        // 尾部插入节点
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }

    return this;
  }

  /**
   * 删除节点
   *
   * @param {*} value
   * @returns {(LinkedListNode|null)} 删除的节点
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // 如果需要删除的节点为头节点，删除至下一个不相同的节点，并且将此节点变为新的头节点
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // 处理尾指针需要删除的情况
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * 查找节点
   *
   * @param {object} props - 查找参数
   * @param {*} props.value - 值
   * @param {function} [props.callback] - 查找回调函数
   */
  find({ value, callback }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (typeof callback === 'function' && callback(currentNode.value)) {
        return currentNode;
      }

      if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * 删除尾节点
   *
   * @returns {LinkedListNode} 删除的节点
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (!currentNode.next.next) {
        // 从当前节点向前判断 2 个节点，遍历到尾节点的前 1 个节点
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * 删除头节点
   *
   * @returns {LinkedListNode} 删除的节点
   */
  deleteHead() {
    const deletedHead = this.head;

    if (!this.head) {
      return deletedHead;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * 将数组添加到链表
   *
   * @param {*[]} values - 数组值
   * @returns {LinkedList} 链表
   */
  fromArray(values) {
    values.forEach((value) => {
      this.append(value);
    });

    return this;
  }

  /**
   * 转换为数组
   *
   * @returns {LinkedListNode[]} 链表数组
   */
  toArray() {
    const values = [];

    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode);
      currentNode = currentNode.next;
    }

    return values;
  }

  /**
   * 转换为字符串
   *
   * @param {function} callback
   * @returns {string} 字符串
   */
  toString(callback) {
    return (
      this.toArray()
        // `toString` 调用 `LinkedListNode#toString`
        .map((value) => value.toString(callback))
        .toString()
    );
  }

  /**
   * 反转链表
   *
   * @returns {LinkedList} 反转后的链表
   */
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      // 存储
      nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
