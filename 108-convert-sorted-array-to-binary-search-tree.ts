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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;
  if (nums.length === 1) return new TreeNode(nums[0], null, null);

  const centerIndex = Math.floor(nums.length / 2);
  let rootNode = new TreeNode(nums[centerIndex]);

  const leftNode = sortedArrayToBST(nums.slice(0, centerIndex));
  rootNode.left = leftNode;

  const rightNode = sortedArrayToBST(nums.slice(centerIndex + 1, nums.length));
  rootNode.right = rightNode;

  return rootNode;
};
