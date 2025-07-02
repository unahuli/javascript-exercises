const palindromes = function (str) {
    const regex = /[ !,?\.']/gi;
    str = str.replaceAll(regex, "").toLowerCase();
    // console.log(str);
    let splitString = str.split("");
    // console.log(splitString.reverse().join(""));
    return str === splitString.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
