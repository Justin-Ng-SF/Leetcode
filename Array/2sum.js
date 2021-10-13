/**
1. Two Sum
Easy

25353

823

Add to List

Share
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
Accepted
5,125,500
Submissions
10,738,350
 */
 var twoSum = function(nums, target) {
    const numsMap = new Map();
    
    for(let i=0; i<nums.length; i++){
        const current = nums[i];
        if(!numsMap.has(current)){
            numsMap.set(current, i);    
        }
        else numsMap.set(current, [numsMap.get(current), i])
        
    }
    
    
    for(let i=0; i<nums.length; i++){
        const t1 = nums[i];
        const t2 = target - nums[i];
        
        if(t1 === t2 && numsMap.get(t1).length === 2){
            return numsMap.get(t1);
        }
        
        if(t1 !== t2 && numsMap.has(t2)){
            return [numsMap.get(t1), numsMap.get(t2)];
        }
        
    }

    
    
};