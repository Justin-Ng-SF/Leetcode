/**
7. Reverse Integer
Easy

5755

8616

Add to List

Share
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
 */
 var reverse = function(x) {
    if(x===0){
        return x;
    }
    //used to compare to x as a string 
    //under assumption that my environment cannot store 64 bit integers (signed or unsigned)
    const max = "147483647";
    const min = "147483648";

    let invalid = false;
    
    let xString = x.toString();
    
    
    //check for negative or positive
    let pos = x > 0;

        

    
    let reversed = pos ? 
        xString.split("").reverse().join("") :
        xString.substring(1, xString.length).split("").reverse().join("");
    
    if(reversed.length>10){
        // console.log('greater than 9bil')
        return 0;
    }
    
    if(reversed.length<10){
        if(pos){
            // console.log('valid pos')
            return reversed
        }
        // console.log('valid neg')
        return '-' + reversed;
    }
    
    if(xString.length === 10){
        invalid = pos ? 
            parseInt(reversed[0]) > 2 : 
            parseInt(reversed[1]) > 2;
    }

    //if first digit of 10 digit number exceeds 2, 
    if(invalid){
        // console.log('greater/less than 2bil')
        return 0;
    }
    
    if(pos){
        if(parseInt(reversed.substring(1, reversed.length))>max){
            // console.log('greater than 2^31-1');
            return 0;
        }
    } 
    //if negative
    if(parseInt(reversed.substring(1, reversed.length))>min){
        // console.log('less than -2^31');
        return 0;
    }
    
    return pos ? reversed : '-' + reversed;

    

    
    
    
    
    
};