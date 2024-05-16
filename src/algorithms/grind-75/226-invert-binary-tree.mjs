/**
 * 226. Invert Binary Tree
 *
 * @see {@link https://leetcode.com/problems/invert-binary-tree/}
 */
import { TreeNode, bfsToLinkedList } from '../../data-structures/tree/tree.mjs';

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) {
    return null;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
}

const tree = bfsToLinkedList([1, 2, 3, null, 4, 5, null]);
const invertedTree = invertTree(tree);
