/*
31. Next Permutation
Medium

8049

2716

Add to List

Share
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is impossible, it must rearrange it to the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
Accepted
656,038
Submissions
1,876,9
*/
var nextPermutation = function (nums) {
	const reverse = (index) => {
		let start = index;
		let end = nums.length - 1;

		while (start < end) {
			[nums[start], nums[end]] = [nums[end], nums[start]];
			start += 1;
			end -= 1;
		}
	};

	for (let index = nums.length - 2; index >= 0; index--) {
		if (nums[index] < nums[index + 1]) {
			let swap = nums.length - 1;

			while (nums[swap] <= nums[index]) swap -= 1;
			[nums[index], nums[swap]] = [nums[swap], nums[index]];
			reverse(index + 1);
			return nums;
		}
	}
	return nums.reverse();
};