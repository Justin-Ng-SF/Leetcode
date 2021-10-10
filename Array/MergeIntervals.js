/*
56. Merge Intervals
Medium

9739

435

Add to List

Share
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {

    intervals.sort((a,b) => a[0]-b[0])
    // console.log(intervals)
    
    function overlaps(current){
        //current   => [a,b]
        //next      => [c, d]

        const a = intervals[current][0];
        const b = intervals[current][1];
        const c = intervals[current+1][0];
        const d = intervals[current+1][1];
        
        if(b < c){
            // console.log(1, current, intervals)
            return 0;
        } 
        else if(a <= c && b>=d){
            return intervals.splice(current+1, 1);
            // console.log(2, current, intervals)
        }
        else if(b >= c){          
            return intervals.splice(current, 2, [a, d]);
            // console.log(3, current, intervals)
        }
    }
    
    for(let i=0; i<intervals.length-1; i++){
        
        if(overlaps(i)){
            i--;
        }
    }
    // console.log(intervals);
    return intervals;
    
    
    
};


