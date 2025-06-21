const sumAll = function(firstNum, secondNum) {
    if (secondNum < 0 || firstNum < 0 || 
        typeof(firstNum) !== 'number' || typeof(secondNum) !== 'number' ||
        Math.floor(firstNum) !== firstNum || Math.floor(secondNum) !== secondNum) {
        return 'ERROR';
    }

    if (firstNum > secondNum) {
        let temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
    }
    let total = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
