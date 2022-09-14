/**
 * 18. 四数之和
 *
 * @see {@link https://leetcode.cn/problems/4sum/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const numsLen = nums.length;
  const sortedNums = nums.slice().sort((pre, next) => pre - next);
  const result = [];

  if (numsLen < 4) {
    return result;
  }

  for (let firstIndex = 0; firstIndex < numsLen - 3; ++firstIndex) {
    const firstNum = sortedNums[firstIndex];

    if (
      // 去重: 若和上一个数相同，跳过本轮迭代
      (firstIndex > 0 && firstNum === sortedNums[firstIndex - 1]) ||
      // 剪枝: 最大值小于目标值，增大左边界
      firstNum +
        sortedNums[numsLen - 1] +
        sortedNums[numsLen - 2] +
        sortedNums[numsLen - 3] <
        target
    ) {
      continue;
    }

    // 剪枝: 最小值大于目标值，终止迭代
    if (
      firstNum +
        sortedNums[firstIndex + 1] +
        sortedNums[firstIndex + 2] +
        sortedNums[firstIndex + 3] >
      target
    ) {
      break;
    }

    for (
      let secondIndex = firstIndex + 1;
      secondIndex < numsLen - 2;
      ++secondIndex
    ) {
      const secondNum = sortedNums[secondIndex];

      if (
        // 去重: 若和上一个数相同，跳过本轮迭代
        (secondIndex > firstIndex + 1 &&
          secondNum === sortedNums[secondIndex - 1]) ||
        // 剪枝: 最大值小于目标值，增大左边界
        firstNum +
          secondNum +
          sortedNums[numsLen - 1] +
          sortedNums[numsLen - 2] <
          target
      ) {
        continue;
      }

      // 剪枝: 最小值大于目标值，终止迭代
      if (
        firstNum +
          secondNum +
          sortedNums[secondIndex + 1] +
          sortedNums[secondIndex + 2] >
        target
      ) {
        break;
      }

      let leftIndex = secondIndex + 1;
      let rightIndex = numsLen - 1;

      while (leftIndex < rightIndex) {
        const leftNum = sortedNums[leftIndex];
        const rightNum = sortedNums[rightIndex];
        const sum = firstNum + secondNum + leftNum + rightNum;

        if (sum === target) {
          result.push([firstNum, secondNum, leftNum, rightNum]);

          while (
            leftIndex < rightIndex &&
            sortedNums[leftIndex] === sortedNums[leftIndex + 1]
          ) {
            ++leftIndex;
          }

          while (
            leftIndex < rightIndex &&
            sortedNums[rightIndex] === sortedNums[rightIndex - 1]
          ) {
            --rightIndex;
          }

          ++leftIndex;
          --rightIndex;
        } else if (sum < target) {
          ++leftIndex;
        } else {
          --rightIndex;
        }
      }
    }
  }

  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
