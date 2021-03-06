/*
239. Sliding Window Maximum
Hard

8039

282

Add to List

Share
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
Example 3:

Input: nums = [1,-1], k = 1
Output: [1,-1]
Example 4:

Input: nums = [9,11], k = 2
Output: [11]
Example 5:

Input: nums = [4,-2], k = 2
Output: [4]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/

var maxSlidingWindow = function (nums, k) {
    
    // Using monotonic queue method 
    let result = [];
    let _stack = [];
    let n = nums.length;
    
    for(let i =0 ; i <n ; i++){
        
        // 1. stack storage the number from large to small
        //    and elements are index in order 
        //    to check the number is in window or not.
        while(_stack.length >0 && nums[i] >= nums[_stack.slice(-1)[0]]){
            _stack.pop();
        };
        
        _stack.push(i);
        
        // 2. Checking the 1st element. If the index is out of the window,
        //    removing this element , and keeping the first element is the maximum.
        while(i - _stack[0] >= k) _stack.shift();
        
        
        // 3. Adding the largest element to result array.
        if(i >= k-1) result.push(nums[_stack[0]]);
        
    };
    
    return result;
    
};