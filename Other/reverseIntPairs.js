function reversePairs(n) {
    let nString = n.toString();
    
    if (nString.length === 1) {
        return n;
    }
    let newString = '';

    for (let i = 0; i < nString.length; i += 2){
        if (i + 1 >= nString.length) {
            nString += nString[i];
            break;
        }

        newString += nString[i + 1] + nString[i];
    }

    return parseInt(newString);
}