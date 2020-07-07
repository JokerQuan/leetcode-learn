/**
 * No. 53 https://leetcode-cn.com/problems/maximum-subarray/
 */

/**
 * 解法1、贪心算法
 * 若当前指针所指元素之前的和小于 0，则丢弃当前元素之前的数列
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * 
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(sum, max);
    }
    return max;
};


/**
 * 解法2、动态规划
 * 若前一个元素大于0，则将其加到当前元素上，最后找出处理后数组中的最大值
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */
var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] = nums[i] + nums[i - 1];
        }
    }
    return Math.max(...nums);
};