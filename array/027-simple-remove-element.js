/**
 * No.27 https://leetcode-cn.com/problems/remove-element/
 */

/**
 * 内存消耗超过100%的用户，这么强吗。。
 */
var removeElement = function(nums, val) {
    let i = 0;
    while(i<=nums.length){
        if(nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};