/*
4. Median of Two Sorted Arrays
Hard

12638

1714

Add to List

Share
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/
var findMedianSortedArrays = function(nums1, nums2) {
    var numbers = nums1.length + nums2.length;
    var mid1 = Math.floor(numbers / 2);
    var mid2 = numbers % 2 === 0 ? mid1+1 : mid1;
    
    var numStack = [];
    var p1 = 0;
    var p2 = 0;
    
    if(nums1.length===0){
        numStack = nums2;
    }
    else if(nums2.length===0){
        numStack = nums1;
    } 
    else
    
    for(let i=0; i<mid2+1; i++){
        if(nums1[p1]<=nums2[p2] && p1<nums1.length || p2>=nums2.length){
            // console.log(1)
            numStack.push(nums1[p1])
            p1++;

            }
        else if(p2<nums2.length || p1>=nums1.length) {
            // console.log(2)
            numStack.push(nums2[p2])
            p2++;

        }
    }
    // console.log(numStack, mid1, mid2)
    
//     if(nums1.length===0){
        
//     }
//     if(nums2.length===0){
        
//     }
    
    // if(nums1.length===0 && nums2.length ===1){
    //     return nums2[0];
    // }
    // if(nums1.length===1 && nums2.length ===0){
    //     return nums1[0];
    // }
    
    if(mid1!==mid2){
        return (numStack[mid1-1]+numStack[mid2-1])/2
    }
    else {
        return numStack[mid1]
    }
    
    
    
    
    /*
    var numbers = nums1.length + nums2.length;
    //represnt by number not index
    var mid1 = Math.floor(numbers / 2);
    var mid2 = numbers % 2 === 0 ? mid1+1 : mid1;
    // var p = 0;
    var p1 = 0;
    var p2 = 0;
    
    // if(nums1.length<=nums2.length){
        for(let i=0; i<mid2; i++){
            if(nums1[p1]<=nums2[p2]){
                p1++;

            }
            else {
                p2++;


            }
//             if(i===mid1){
//             }
        }
    console.log(nums1[p1], nums2[p2], mid1, mid2)
    if(mid1===mid2){
        console.log('o', Math.min(nums1[p1], nums2[p2]));
    }
    else {
        console.log('e')
    }
//     }
//     else for(let i=0; i<nums2.length; i++){
        
//     }
        */
};