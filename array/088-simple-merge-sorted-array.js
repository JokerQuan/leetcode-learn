/**
 * No.88 https://leetcode-cn.com/problems/merge-sorted-array/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n);
    let len = m + n;
    for (let i = 0; i < len; i++) {
        if (nums1[i] > nums2[0]) {
            nums1.splice(i, 0, nums2.shift());
            m++;
        }
        if (i >= m) {
            nums1.splice(i, 0, nums2.shift());
        }
    }
    return nums1;
};