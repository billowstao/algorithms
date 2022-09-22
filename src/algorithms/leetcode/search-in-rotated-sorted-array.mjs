/**
 * 33. 搜索旋转排序数组
 *
 * @see {@link https://leetcode.cn/problems/search-in-rotated-sorted-array/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const numsLen = nums.length;

  if (!numsLen) {
    return -1;
  }

  if (numsLen === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let leftIndex = 0;
  let rightIndex = numsLen - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const midNum = nums[midIndex];

    if (midNum === target) {
      return midIndex;
    }

    // 判断哪一侧为有序数组，根据有序数据判断 target 在不在该部分
    if (nums[0] <= midNum) {
      // 左侧有序
      if (nums[0] <= target && target < midNum) {
        rightIndex = midIndex - 1;
      } else {
        leftIndex = midIndex + 1;
      }
    } else {
      // 右侧有序
      if (midNum < target && target <= nums[numsLen - 1]) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
