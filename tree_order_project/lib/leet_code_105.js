// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null; // base case: no left or right nodes

  let rootVal = preorder[0]; // set first preorder to be root;
  let rootNode = new TreeNode(rootVal);

  let rootIdx = inorder.indexOf(rootVal) // gives us the spot in inorder, where to split that array;
  let inorderLeft = inorder.slice(0,rootIdx);
  let inorderRight = inorder.slice(rootIdx+1);

  let preorderLeft = preorder.filter((el) => inorderLeft.includes(el));
  let preorderRight = preorder.filter((el) => inorderRight.includes(el));

  rootNode.left = buildTree(preorderLeft, inorderLeft)
  rootNode.right = buildTree(preorderRight, inorderRight)

  return rootNode
}

let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]

console.log(buildTree(preorder, inorder))