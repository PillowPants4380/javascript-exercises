// const repeatString = function() {
    
   
    
//     return "heyheyhey";
// };

function repeatString (string, numOfTimes){

    let newString = "";

    if(numOfTimes < 0){
        return "ERROR";
    }

    for(let i = 0; i < numOfTimes; i++){
        newString += string;
    }

    return newString;
}

// Do not edit below this line
module.exports = repeatString;
