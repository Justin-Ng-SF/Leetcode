/*
200. Number of Islands
Medium

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

 var numIslands = function(grid) {
    var islandCount = 0;



    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === '1') {
                checkNearby(i, j);
                islandCount++;
            }

        }
    }

    function checkNearby(row, column) {
        if (row >= grid.length ||
            column >= grid[0].length ||
            row < 0 ||
            column < 0 ||
            grid[row][column] === 0) {
            return;
        }

        if (grid[row][column] === '1') {
            grid[row][column] = 0;

            //go down
            checkNearby(row, column + 1);

            //go right
            checkNearby(row + 1, column);

            //go left
            checkNearby(row - 1, column);

            //go up
            checkNearby(row, column - 1);

        }

    }
    console.log(grid)
    return islandCount;
};