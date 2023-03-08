/**
 * 栈
 */
export class Stack {
  /** 栈 */
  #stack = [];

  /**
   * 入栈
   *
   * @param {*} elem - 入栈元素
   */
  push(elem) {
    this.#stack.push(elem);
  }

  /**
   * 出栈
   *
   * @returns - 栈顶元素
   */
  pop() {
    return this.#stack.pop();
  }

  /**
   * 栈是否为空
   *
   * @returns - 是否为空
   */
  isEmpty() {
    return this.#stack.length === 0;
  }

  /**
   * 获取栈顶元素
   *
   * @returns 栈顶元素
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.#stack[this.#stack.length - 1];
  }
}

export default Stack;
