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
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  function depthFirstSearch(node: TreeNode, acc) {
    if (!node) return acc;
    return Math.max(
      depthFirstSearch(node.left, acc + 1),
      depthFirstSearch(node.right, acc + 1)
    );
  }

  return depthFirstSearch(root, 0);
}

// console.log(maxDepth([1, 2, 3, 4, 5])); // 3
// console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // 3
// console.log(maxDepth([1, null, 2])); // 2
