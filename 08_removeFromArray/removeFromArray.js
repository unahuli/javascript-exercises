const removeFromArray = function(arr, ...nums) {
    for (num of nums) {
        arr = arr.filter(item => item !== num);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
