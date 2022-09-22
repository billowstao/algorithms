/**
 * 643. 子数组最大平均数 I
 *
 * @see {@link https://leetcode.cn/problems/maximum-average-subarray-i/}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  const numCount = nums.length;
  let sum = 0;

  for (let index = 0; index < k; ++index) {
    sum += nums[index];
  }

  let maxSum = sum;

  for (let index = k; index < numCount; ++index) {
    sum = sum - nums[index - k] + nums[index];

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
