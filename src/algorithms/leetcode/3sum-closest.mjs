/**
 * 16. 最接近的三数之和
 *
 * @see {@link https://leetcode.com/problems/3sum-closest/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const numsLen = nums.length;
  const sortedNums = nums.slice().sort((pre, next) => pre - next);
  let closestSum = Number.MAX_SAFE_INTEGER;

  for (let index = 0; index < numsLen; ++index) {
    let currentNum = sortedNums[index];

    if (index && currentNum === sortedNums[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = numsLen - 1;

    while (left < right) {
      const leftNum = sortedNums[left];
      const rightNum = sortedNums[right];
      const sum = currentNum + leftNum + rightNum;

      if (sum === target) {
        return sum;
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum > target) {
        --right;

        while (left < right && sortedNums[right] === sortedNums[right - 1]) {
          --right;
        }
      } else {
        ++left;

        while (left < right && sortedNums[left] === sortedNums[left + 1]) {
          ++left;
        }
      }
    }
  }

  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)); // -2
