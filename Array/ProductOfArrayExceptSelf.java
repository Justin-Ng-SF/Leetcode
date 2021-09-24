/*
238. Product of Array Except Self
Medium

8940

605

Add to List

Share
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/


class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] arr = new int[nums.length];
        Arrays.fill(arr, 1);
        
        int temp = nums[0];
        
        for(int i=1; i<nums.length; i++){
            // System.out.println(temp);
            arr[i] *= temp;
            temp *= nums[i];

        }

        temp = nums[nums.length-1];
        
        for(int i=nums.length-2; i>=0; i--){
            // System.out.println(temp);
            arr[i] *= temp;
            temp *= nums[i];
        }  
        return arr;
    }
}

// 1 1 1 1
// temp = 2
// 1 2 1 1 
// temp = 6
// 1 2 6 1 
// temp = 24
// 1 2 6 24
//
//temp = 5
//1 2 30 24
//temp = 20
//1 40 30 24
//temp = 60
//