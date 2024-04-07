const sumAll = function(startNum, endNum) {
    let sum = 0;
    if (typeof(startNum) === "number" && typeof(endNum) === "number") {
        if (startNum < 0 || endNum < 0) {
            return "ERROR";
        }
        
        if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                sum += i;
            }
        }
        else {
            for (let i = startNum; i >= endNum; i--) {
                sum += i;
            }
        }

        return sum;
    }
    else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
