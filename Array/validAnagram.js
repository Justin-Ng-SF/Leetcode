/**
 242. Valid Anagram
Easy

3685

190

Add to List

Share
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */
 var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    
    const sMap = new Map();
    
    for(let i=0; i<s.length; i++){
        let sChar = s[i];
        
        if(sMap.has(sChar)){
            sMap.set(sChar, sMap.get(sChar)+1);
        }
        else{
            sMap.set(sChar, 1);
        }
    }
    
    for(let i=0; i<t.length; i++){
        let tChar = t[i];
        
        if(sMap.get(tChar)<=0 || !sMap.has(tChar)){
            return false;
        }
        else{
            sMap.set(tChar, sMap.get(tChar)-1);
        }
    }
    return true;
};