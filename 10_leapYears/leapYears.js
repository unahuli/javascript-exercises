const leapYears = function(year) {
    // if (year % 4 === 0) {
    //     if (year % 100 === 0 && year % 400 === 0) {
    //         return true;
    //     } else { 
    //         return false;
    //     }    
    // } else {
    //     return true;
    // }
    // return false;
    if (year % 4 === 0 && year % 100 === 0) {
        return year % 400 === 0;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
