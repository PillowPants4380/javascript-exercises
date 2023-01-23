const removeFromArray = (startArray, ...Args) => {
    const remArray = Array.from(Args);
    let lstartArray = startArray.length;
    const newArray = [];
    for(let i = 0; i < lstartArray; i++){
        if(!remArray.includes(startArray[i])){
            newArray.push(startArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
