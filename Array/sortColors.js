/**
75. Sort Colors
Medium

7097

348

Add to List

Share
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
Example 3:

Input: nums = [0]
Output: [0]
Example 4:

Input: nums = [1]
Output: [1]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is 0, 1, or 2.
 
 */
 var sortColors = function(nums) {
    var zeroPointer = 0;
    var twoPointer = nums.length-1;
    
    for(let i=0; i<nums.length; i++){
        var current = nums[i];
        
        if(current===0){
            if(i!==zeroPointer){
                [nums[zeroPointer], nums[i]] = [nums[i], nums[zeroPointer]];
            }
            zeroPointer++;            
        }
        if(current===2){

            [nums[twoPointer], nums[i]] = [nums[i], nums[twoPointer]];
            i--;
            twoPointer--;
        }
        if(i===twoPointer){
            return;
        }
        // console.log(nums, i, twoPointer)   
    }
    
    
};
//===============================
/**
10/18/2021
 */
 var sortColors = function(nums) {
    if(nums.length===1){
        return nums;
    }
    let red = 0;
    let white = 0;
    // let blue = nums.length-1;
    let count = nums.length;
    let temp;
    
    
    
    for(let i=0; i<count; i++){
        while(nums[count-1]===2 && i<=count && i>0){
            count--;
        }
        if(i===count){
            break;
        }
        let color = nums[i];
        switch(color){
            //red
            case 0:
                if(i!==red){
                    // console.log(0)
                    temp = nums[red];
                    nums[i] = temp;
                    nums[red] = 0;
                    red++;
                    i--;
                }
                break;
            //white    
            // case 1:
            //     if(i!==white){
            //         console.log(1)
            //         temp = nums[white];
            //         nums[i] = temp;
            //         nums[white] = 1;
            //         white++;
            //         i--;
            //     }
            //     break;
            //blue    
            case 2:
                // console.log(2)
                temp = nums[count-1];
                nums[i] = temp;
                nums[count-1] = 2;
                count--;
                i--;
                break;
                
            default:
                break;
                
        }
    }
    
    return nums;
};