/**
 * 树节点
 */
export class TreeNode {
  /** 节点值 */
  val;

  /** 左节点 */
  left;

  /** 右节点 */
  right;

  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 广度优先转换为链表
 *
 * @param {(number|null)[]} bfsSequence - 广度优先遍历序列
 */
export function bfsToLinkedList(bfsSequence) {
  if (!(Array.isArray(bfsSequence) && bfsSequence.length)) {
    return null;
  }

  const queue = [];
  const root = new TreeNode(bfsSequence[0]);
  queue.push(root);

  for (let index = 1; index < bfsSequence.length; index++) {
    const node = queue.shift();
    node.left = new TreeNode(bfsSequence[index]);
    queue.push(node.left);

    if (index + 1 < bfsSequence.length) {
      node.right = new TreeNode(bfsSequence[index + 1]);
      queue.push(node.right);
      index++;
    }
  }

  return root;
}
