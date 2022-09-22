/**
 * 219. 存在重复元素 II
 *
 * @see {@link https://leetcode.cn/problems/contains-duplicate-ii/}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 const containsNearbyDuplicate = function (nums, k) {
  const numNumber = nums.length;
  const numSet = new Set();
  let right = -1;

  for (let index = 0; index < numNumber; index++) {
    if (index != 0) {
      numSet.delete(nums[index - 1]);
    }

    while (right + 1 < numNumber && right + 1 - index <= k) {
      if (numSet.has(nums[right + 1])) {
        return true;
      } else {
        numSet.add(nums[right + 1]);
        right++;
      }
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
