import { _Node } from './common';

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  const copyNodes: Map<_Node, _Node> = new Map();
  function copyNext(oldNode: _Node | null): _Node | null {
    if (!oldNode) return null;
    const newNode = new _Node(oldNode.val, copyNext(oldNode.next));
    copyNodes.set(oldNode, newNode);
    return newNode;
  }
  const newList = copyNext(head);

  function copyRandom(oldNode: _Node | null) {
    if (!oldNode) return;
    const newNode = copyNodes.get(oldNode);
    const newNodeRandom = copyNodes.get(oldNode.random);
    newNode.random = newNodeRandom;
    copyRandom(oldNode.next);
  }
  copyRandom(head);

  return newList;
};
