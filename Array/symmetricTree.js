/*101. Symmetric Tree
Easy

8060

198

Add to List

Share
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
*/
var isSymmetric = function (root) {

        function isEqual(root1, root2) {
            if (!root1 && !root2) return true;
            if (!root1 || !root2) return false;
            return root1.val === root2.val
                && isEqual(root1.left, root2.right)
                && isEqual(root1.right, root2.left);
        }
        if (!root) return true;
        return isEqual(root.left, root.right)
    };