module.exports = function reverse (n) {
        let string = '' + n;
        let res;
        (n > 0) ? res = Number(string.split("").reverse().join("")) : res = Number(string.slice(1).split("").reverse().join(""));
        return res;
}
