const fibonacci = function(num) {
    num = +num;
    if (num === 0) return 0;
    if (num < 0) return "OOPS";
    firstOperand = 1;
    secondOperand = 0;
    fibonacciNum = 1;
    for (let i = 0; i < num; i++) {
        if (i > 0) firstOperand = fibonacciNum;
        if (i === 1) firstOperand = 1;
        fibonacciNum = firstOperand + secondOperand;
        if (i > 0) secondOperand = firstOperand;
    }
    return fibonacciNum;
    
};

// Do not edit below this line
module.exports = fibonacci;
