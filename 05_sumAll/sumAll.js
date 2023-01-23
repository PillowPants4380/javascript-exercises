const sumAll = (num1, num2) => {

    let startNum;
    let endNum;
    let sumAll = 0;

    if(num1 < 0 || num2 < 0 || typeof(num1) ==="string" || typeof(num2) ==="string" || isNaN(num1) || isNaN(num2)){
        return "ERROR";
    }
    num1 < num2 ? (startNum = num1, endNum = num2) : (startNum = num2, endNum = num1);

    for(let i = startNum; i <= endNum; i++){
        sumAll+=i;
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
