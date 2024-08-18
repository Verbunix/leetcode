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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let pArray: (number | null)[] = [];
  let qArray: (number | null)[] = [];

  function depthFirstSearch(node: TreeNode | null, iArray: (number | null)[]) {
    if (!node) {
      iArray.push(null);
      return;
    }
    iArray.push(node.val);

    if (!node.left && !node.right) return;

    depthFirstSearch(node.left, iArray);
    depthFirstSearch(node.right, iArray);
  }

  depthFirstSearch(p, pArray);
  depthFirstSearch(q, qArray);

  if (pArray.length !== qArray.length) return false;
  for (let i = 0, j = 0; i < pArray.length && j < qArray.length; i++, j++) {
    if (pArray[i] !== qArray[j]) return false;
  }
  return true;
};

// console.log(
//   isSameTree(
//     new TreeNode(1, new TreeNode(2, null, null), new TreeNode(1, null, null)),
//     new TreeNode(1, new TreeNode(1, null, null), new TreeNode(2, null, null)),
//   ),
// ); // false
// console.log(
//   isSameTree(
//     new TreeNode(1, null, null),
//     new TreeNode(1, null, new TreeNode(2, null, null)),
//   ),
// ); // false
// console.log(
//   isSameTree(
//     new TreeNode(1, new TreeNode(2, null, null), null),
//     new TreeNode(1, null, new TreeNode(2, null, null)),
//   ),
// ); // false
