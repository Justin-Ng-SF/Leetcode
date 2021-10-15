/**
54. Spiral Matrix
Medium

5263

731

Add to List

Share
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
Accepted
596,637
Submissions
1,525,120
 */
 var spiralOrder = function(matrix) {
    let left = 0
    let right = matrix[0].length-1
    let top = 0
    let bottom = matrix.length-1
    
    let result = []
    
    while (left < right && top < bottom) {
        for (let i=left; i<=right; i++) result.push(matrix[top][i])
        top++
        
        for (let i=top; i<=bottom; i++) result.push(matrix[i][right])
        right--
        
        for (let i=right; i>=left; i--) result.push(matrix[bottom][i])
        bottom--     
        
        for (let i=bottom; i>=top; i--) result.push(matrix[i][left])
        left++           
    }
    
    if (left === right) {
        //A column is remaining, we want to push from top to bottom for index left/right
        for (let i=top; i<=bottom; i++) result.push(matrix[i][left])
        
    }else if (bottom === top) {
        //A row is remaining, We want to push everything from left to right for the index top/right
        for (let i=left; i<=right; i++) result.push(matrix[top][i])      
    }
    
    return result
};