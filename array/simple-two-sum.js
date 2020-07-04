/**
 * No.1 https://leetcode-cn.com/problems/two-sum/
 */

//暴力双循环（不推荐）
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i  < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };


//map 记录匹配值
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i];
        if (map.has(dif)) {
            //若在map中找到可以和本次加数相匹配的加数，则取出下标
            return [map.get(dif), i];
        }
        //用map记录前面的加数所需要的另一个加数，key为加数，value为下标
        map.set(nums[i], i);
    }
};

console.log(twoSum([2, 7, 11, 15], 9));