import { TreeNode } from './common';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function getMinimumDifference(root: TreeNode | null): number {
  if (!root) return 0;
  let minDiff = Infinity;
  const sortedValues = [];

  function depthFirstSearch(node: TreeNode) {
    if (!node) return;
    depthFirstSearch(node.left);
    sortedValues.push(node.val); // inorder traversal
    depthFirstSearch(node.right);
  }
  depthFirstSearch(root);

  for (let i = 1; i < sortedValues.length; i++) {
    const element = sortedValues[i];
    minDiff = Math.min(minDiff, Math.abs(element - sortedValues[i - 1]));
  }

  return minDiff;
};

// console.log(getMinimumDifference(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6)))); // 1
