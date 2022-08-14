const sumAll = function(...args) {

    let max = args[1];
    let min = args[0];

    let total = 0;

    if (max < 0 || min < 0 || typeof max == "string" || typeof min == "string" || max.constructor == Array || min.constructor == Array) return "ERROR";
    else if (max > min){
        for (let i = min; i <= max; i += min){
            total += i;
        } 
    } else {
        for (let i = max; i <= min; i += max){
            total += i;
        } 
    }
    
    return total;

    

};

// Do not edit below this line
module.exports = sumAll;
