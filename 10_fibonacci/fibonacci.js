const fibonacci = function(a) {
    if (a < 0) return 'OOPS';
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= a; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return n1;

    //0 + 1 = 1
    //1==4 flag=2
    //1 + 2 = 3
    //flag = 3;

};

// Do not edit below this line
module.exports = fibonacci;
