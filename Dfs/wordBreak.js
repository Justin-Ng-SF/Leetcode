var  wordBreak = function(s,wordDict) {
    let set = new Set(wordDict);
    let cache = new Map();
    return recurFind(set, s, cache);
}

function recurFind(set, s, cache) {
    if (cache.has(s)){
        return cache.get(s);
    } 
    if (set.has(s)) return true;
    for (let i = 1; i < s.length; i++) {
        if (set.has(s.substring(0, i)) && recurFind(set, s.substring(i, s.length), cache)) {
            cache.set(s,true);
            return true;   
        }
    }
    cache.set(s,false);
    return false;
}