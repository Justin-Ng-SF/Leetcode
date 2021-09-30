/*
136. Single Number
Easy

7326

238

Add to List

Share
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/
class Solution 
{
    public int singleNumber(int[] nums) 
    {
        HashMap<Integer, Integer> numberMap = new HashMap<>();
        
        int output = nums[0];
        
        if(nums.length==1){
            return output;
        }
        
        for(int i=0; i<nums.length; i++)
        {
            if(!numberMap.containsKey(nums[i]))
            {
                numberMap.put(nums[i], 1);
            }
            else 
            {
                numberMap.put(nums[i], numberMap.get(nums[i])+1);
            }
        }
        
        // System.out.println(numberMap);
        
        for(int i=0; i<nums.length; i++)
        {
            if(numberMap.get(nums[i])==1)
            {
                output = numberMap.get(nums[i]);
            }
        }
        for(Map.Entry<Integer, Integer> entry : numberMap.entrySet()){
            if(entry.getValue()==1){
                output = entry.getKey();
            }
        }
        
        
        return output;
    }
}