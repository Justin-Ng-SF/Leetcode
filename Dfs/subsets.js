/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const output = [];
    createSubset([], 0);
    
    function createSubset(subset, index){
        output.push(subset);
        
        for(let i=index; i<nums.length; i++){
            createSubset([...subset, nums[i]], i+1);
        }
        
    }
    
    
    
    
    return output;
};

