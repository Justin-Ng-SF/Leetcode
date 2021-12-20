/**
36. Valid Sudoku
Medium

4015

650

Add to List

Share
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
 */
 var isValidSudoku = function(board) {
    
    let columns = {};
    let rows = {};
    let grids = {};
    let counter = 0;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) { 
            
            let current = board[i][j];
            
            //adding rows 
             if(!rows[i+1]) {
                 rows[i+1] = [];
             }
                
             if(current != '.' && rows[i+1].indexOf(current) != -1) return false;
            
             rows[i+1].push(board[i][j]);
            
            
            
             //adding columns
            if(!columns[j+1]) {
                columns[j+1] = [];
            }
            
            if(current != '.' && columns[j+1].indexOf(current) != -1) return false;
            
            columns[j+1].push(current);
            
            //adding grids
            if(!grids[determineWhichGrid(i ,j)]) {
               grids[determineWhichGrid(i ,j)] = [];
            }
            
            if(current != '.' &&  grids[determineWhichGrid(i ,j)].indexOf(current) != -1) return false;
            
            grids[determineWhichGrid(i ,j)].push(current);
            
        }
    }
    return true;
};

function determineWhichGrid(i, j) {
    if(i >= 0 && i <= 2 && j >= 0 && j <= 2) {
        return 1;
    }
    if(i >= 0 && i <= 2 && j >= 3 && j <= 5) {
        return 2;
    }
    if(i >= 0 && i <= 2 && j >= 6 && j <= 8) {
        return 3;
    }
    if(i >= 3 && i <= 5 && j >= 0 && j <= 2) {
        return 4;
    }
    if(i >= 3 && i <= 5 && j >= 3 && j <= 5) {
        return 5;
    }
    if(i >= 3 && i <= 5 && j >= 6 && j <= 8) {
        return 6;
    }
    if(i >= 6 && i <= 8 && j >= 0 && j <= 2) {
        return 7;
    }
    if(i >= 6 && i <= 8 && j >= 3 && j <= 5) {
        return 8;
    }
    if(i >= 6 && i <= 8 && j >= 6 && j <= 8) {
        return 9;
    }
}