/**
 * No.7 https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let originX = x;
    if (x < 0) {
        x = -x;
    }
    let strX = x + "";
    let reverseStr = strX.split("").reverse().join("");
    x = +reverseStr;
    if (Math.abs(x) > (Math.pow(2, 31) - 1)) return 0;
    if (originX < 0) return -x;
    return x;
};