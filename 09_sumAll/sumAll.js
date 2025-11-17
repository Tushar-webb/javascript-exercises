const sumAll = function (startingNum, endingNum) {
    if (Number.isInteger(startingNum) && Number.isInteger(endingNum) && startingNum > -1 && endingNum > -1) {
        let sum = 0;
        if (startingNum < endingNum) {
            for (let i = startingNum; i <= endingNum; i++) {
                sum += i;
            }
            return sum;
        }
        else {
            for (let i = startingNum; i >= endingNum; i--) {
                sum += i;
            }
            return sum;
        }
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
