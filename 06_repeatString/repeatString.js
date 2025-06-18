const repeatString = function(word, num) {
    if (num < 0) return 'ERROR';
    let repeatedWord = '';
    for(let i = 0; i < num; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
