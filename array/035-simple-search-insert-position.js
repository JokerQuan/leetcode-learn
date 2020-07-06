/**
 * No.35 https://leetcode-cn.com/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    while(i<=nums.length){
        if(target <= nums[i]){
            return i;
        }
        i++
    }
    return nums.length;
};