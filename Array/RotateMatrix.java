/*
logo
Explore
Problems
Interview
Contest
Discuss
Store
🚀 September LeetCoding Challenge 2021 🚀
6
Description
Solution
Discuss (999+)
Submissions
48. Rotate Image
Medium

6422

394

Add to List

Share
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]
 

Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
Accepted
*/

class Solution {
    public void rotate(int[][] matrix) {
        int iterations = matrix.length % 2 == 0 ? matrix.length/2 : matrix.length/2+1;

        for(int i=0; i<iterations; i++){
            for(int j=0; j<iterations; j++){
                if(matrix.length%2==1 && j==matrix.length/2){
                    break;
                }
                    
                //store b
                int tempA = matrix[j][matrix.length-1-i];
                // [0][2]
                //move a to b
                matrix[j][matrix.length-1-i] = matrix[i][j];
                // [0][2] = [1][0]
                
                
                
                
                //store c
                int tempB = matrix[matrix.length-1-i][matrix.length-1-j];
                // [2][3]
                //move b to c
                matrix[matrix.length-1-i][matrix.length-1-j] = tempA;
                // [2][3] = [0][2]
                //store d
                tempA = matrix[matrix.length-1-j][i];
                // [3][1]
                //move c to d
                matrix[matrix.length-1-j][i] = tempB;
                // [3][1]
                //no need to store a
                //move d to a
                matrix[i][j] = tempA;
                
                // System.out.println("--------------------");
        
                // System.out.println(Arrays.toString(matrix[0]));
                // System.out.println(Arrays.toString(matrix[1]));
                // System.out.println(Arrays.toString(matrix[2]));
                // System.out.println(Arrays.toString(matrix[3]));
                // System.out.println("--------------------");
            }

            
        }
        
    }
}



