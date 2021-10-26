/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {

    //min -2147483648
    //max 2147483647  
    let sign = "";
    let num = ""; 
    let leadingZero = false;
    
    for(let i=0; i<s.length; i++){
        let char = s[i];
        //if non integer, ie whitespace, sign, or letter
        if(char >= '0' && char <= '9'){
            // console.log(num.length, char)

            if(num.length===9){
                //if positive
                if(!sign || sign==="+"){
                    //check if its more than 32 bit
                    if(parseInt(num)===214748364 && parseInt(char)>7 || parseInt(num)>214748364){
                        // console.log('max')
                        return 2147483647;
                    }
                }

                //negative
                else{
                    //check if its more than 32 bit
                    if(parseInt(num)===214748364 && parseInt(char)>8 || parseInt(num)>214748364){
                        // console.log('min')
                        return -2147483648;
                    }
                    // else{
                    //     console.log('idk')
                    //     return parseInt(sign+num+char);
                    // }
                }
            }
            else if(num.length===10){
                // console.log('yes')
                return sign==='-' ? -2147483648 : 2147483647;
            }
            else if(parseInt(char)===0 && !num.length){
                // console.log('continued')
                leadingZero = true;
                continue;
            }
            num+=char;
        }
        else{
            if(leadingZero && !num.length){
                return 0;
            }
            //if whitespace, check if number exists yet, including sign
            if(char===" "){
                //if a white space comes after a sign and there are no numbers yet, return 0
                if(sign.length && !num.length){
                    // console.log('whitespace w/ sign but no num')
                    return 0;
                }
                //if a white spaces comes after a number, should return number
                else if(num.length){
                    // console.log('whitespace w num')
                    //its negative, return it as negative num, else return as pos num w/o the + sign
                    return sign==='-' ? parseInt(sign+num) : parseInt(num);
                }
                //do not need to assume for if a whitespace comes while there is no number or sign
            }
            else if(char==="-" || char==="+"){
                //if no sign yet
                if(!sign.length && !num.length){
                    sign = char;
                }
                else{
                    // console.log('already has a sign');
                    if(!num){
                        return 0;
                    }
                    return sign==='-' ? parseInt(sign+num) : parseInt(num);
                }

            }
            //if letter and no num
            else if(!num){
                return 0;
            }
            //else if there is a num
            else{
                return sign==='-' ? parseInt(sign+num) : parseInt(num); 
            }
            
        }
        
        
    }
    num = sign==='-' ? parseInt(sign+num) : parseInt(num);
    if(isNaN(num)){
        return 0;
    }
    else{ 
        // console.log('end')
        return num;
    }
};