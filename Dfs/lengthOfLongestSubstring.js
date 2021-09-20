/*
3. Longest Substring Without Repeating Characters
Medium

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/


var lengthOfLongestSubstring = function(s) {
    var charMap = {};
    var currentString = "";
    var longestString = "";
    
    var p1 = 0;
    var p2 = 0;
    
    for(let i=0; i<s.length; i++){
        p2 = i + 1;
        var currChar = s[i];
        
        currentString += currChar;
        
        if(!charMap[currChar]){
            charMap[currChar]={
                count: 1,
                index: -1
            };

        } else charMap[currChar].count++;
        
        if(charMap[currChar].count>1){
            // console.log('before', p1)
            p1 = charMap[currChar].index + 1 > p1 ? charMap[currChar].index + 1 : p1;
            // console.log('after', p1)
            currentString = s.substring(p1, p2);
            charMap[currChar].count--;
            // console.log(p1, currentString, charMap[currChar].count)
        }
        
        
        charMap[currChar].index = i;

        longestString = currentString.length>=longestString.length ? currentString : longestString;
        // console.log(p1, currChar, charMap[currChar])
    }
    // console.log(longestString)
    return longestString.length
};
