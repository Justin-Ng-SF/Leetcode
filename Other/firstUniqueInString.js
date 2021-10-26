/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const stringMap = new Map();
    
    for(let i=0; i<s.length; i++){
        // console.log(stringMap.get(s[i]))
        if(stringMap.get(s[i])===undefined){
            stringMap.set(s[i], i);
        }
        else stringMap.set(s[i], -1);
        
    }
    
    let uniqueIndex = s.length+1;
    let uniqueLetter = '';
    
    stringMap.forEach((index,letter) =>{
        if(index>=0 && index<=uniqueIndex){
            uniqueIndex=index;
            uniqueLetter = letter;
        }
    });
    
    // console.log(stringMap)
    // console.log(uniqueIndex, uniqueLetter)
    return (uniqueIndex<s.length+1) ? uniqueIndex : -1 ;
    
    
};