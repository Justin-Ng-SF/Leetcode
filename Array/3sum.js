/**
15. 3Sum
Medium

13467

1301

Add to List

Share
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */
 var threeSum = function(nums) {
    if(nums.length<3){
        return [];
    }
    
    nums.sort((a, b)=>a-b);
    const numsMap = new Map();
    const output = new Map();
    
    for(let i=0; i<nums.length; i++){
        const current = nums[i];
        if(!numsMap.has(current)){
            numsMap.set(current, [i]);    
        }
        // const temp = 
        else if(numsMap.get(current).length<4){
            numsMap.get(current).push(i);
        }
        // else{
        //     nums.splice(i, 1);
        // }
            // numsMap.set(current, [numsMap.get(current), i])
    }
    console.log(numsMap)
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(i===j){
                break;
            }
            let t1 = nums[i];
            let t2 = nums[j];
            let t3 = (t1 + t2) !== 0 ? (-1 * (t1+t2)) : 0;
            let t123 = [t1, t2, t3].sort()
            
            // console.log(t123)
//             if(t1===t2 && t2===t3){
                
//             }
            
            if(numsMap.has(t3)){
                if(t1===t2 && t2===t3){
                    if(numsMap.get(t1).length>=3){
                        output.set(t123.toString(), t123);
                    }
                    else break;
                }
                else if(t1===t3 && numsMap.get(t1).length>1){
                    // console.log(1, i, j, t123);
                    numsMap.get(t1).splice(i);
                    output.set(t123.toString(), t123);
                }
                else if(t2===t3 && numsMap.get(t2).length>1){
                    // console.log(2, i, j, t123);
                    numsMap.get(t2).splice(i);
                    output.set(t123.toString(), t123);
                }
                else if(t1!==t3 && t2!==t3){
                    // console.log(3, i, j, t123);
                    output.set(t123.toString(), t123);
                }
            }
            
            
            
            
            
        }
    }
    
    
    return Array.from(output.values()); 

    
};