const palindromes = function (str) {

    let reg = /[^A-Za-z0-9]/g;
    let toLower = str.toLowerCase().replace(reg, '');
    let reversed = toLower.split('').reverse().join('');

    return toLower === reversed;
};

// Do not edit below this line
module.exports = palindromes;
