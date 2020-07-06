/**
 * No.26 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * 暴力循环
 */
var removeDuplicates = function(nums) {
    let cur = 0;
    let len = nums.length;
    for(let i = 1; i < len; i++) {
        if(nums[cur] === nums[i]){
            nums.splice(i, 1);
            len--;
            i--;
        } else {
            cur = i;
        }
    }
    return nums.length;
};


/**
 * 双指针
 */
var removeDuplicates = function(nums) {
    if (null == nums || nums.length < 2) {
            return nums.length;
        }
        let i = 0, j = 1;
        while (j < nums.length) {
            if (nums[i] == nums[j]) {
                ++j;
            } else {
                nums[++i] = nums[j++];
            }
        }
        return ++i;
};