/**
 * @param {number[]} T
 * @return {number[]}
 */
 var dailyTemperatures = function(T) {
    function dailyTemp(day, temp){
        this.day = day;
        this.temp = temp;
    }
    
    var dailyTempStack = [];
    var output = new Array(T.length);
    // console.log(dailyTempStack[0])
    for(let day=T.length-1; day>=0; day--){
        var curTemp = T[day];
        
        while(curTemp>=dailyTempStack[dailyTempStack.length-1]?.temp){
            dailyTempStack.pop();
        }
        
        if(dailyTempStack[dailyTempStack.length-1]){
            output[day] = dailyTempStack[dailyTempStack.length-1].day-day;
        } else output[day] = 0;
        dailyTempStack.push(new dailyTemp(day, curTemp))
    }
    
    console.log(output)
    return output
};
