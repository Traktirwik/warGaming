module.exports = function pipe(funcArr) {
    function zxc(x) {
        funcArr.forEach(item => x = item(x))
        return x
    }
    return zxc;
}

