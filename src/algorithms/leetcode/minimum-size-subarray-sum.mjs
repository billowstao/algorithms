/**
 * 209. 长度最小的子数组
 *
 * @see {@link https://leetcode.com/problems/minimum-size-subarray-sum/}
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  const numbersAmount = nums.length;
  let right = -1;
  let sum = 0;
  let minLen = 0;

  for (let index = 0; index < numbersAmount; ++index) {
    if (index) {
      sum -= nums[index - 1];
    }

    while (right + 1 < numbersAmount && sum < target) {
      sum += nums[right + 1];
      ++right;
    }
    
    if (sum >= target) {
      const len = right - index + 1;
      if (!minLen) {
        minLen = len;
      } else if (len < minLen) {
        minLen = len;
      }
    }
  }

  return minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
