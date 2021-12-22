/*
2. Add Two Numbers
Medium

15344

3329

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/
var addTwoNumbers = function (l1, l2) {
    
    let remainder = 0;
    
    let current = new ListNode();
    let root = current;
    
    while (l1 || l2 || remainder) {
        current.next = new ListNode();
        current = current.next;
        let sum = 0;
        
        if (l1 && l2) {
            sum = l1.val + l2.val + remainder;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1){
            sum = l1.val + remainder;
            l1 = l1.next;
        } else if (l2) {
            sum = l2.val + remainder;
            l2 = l2.next;
        } else {
            sum = remainder;
        }
        
        if (sum >= 10) {
            const firstInteger = parseInt(sum.toString()[0]);
            const secondInteger = parseInt(sum.toString()[1]);

            current.val = secondInteger;
            remainder = firstInteger;
        } else {
            current.val = sum;
            remainder = 0;
        }
    }
    
    return root.next;
};