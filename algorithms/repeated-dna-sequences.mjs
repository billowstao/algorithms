/**
 * 187. 重复的DNA序列
 *
 * @see {@link https://leetcode.cn/problems/repeated-dna-sequences}
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const SUB_STR_LEN = 10;
  const CHAR_BIT_LEN = 2;
  const charBit = new Map([
    ['A', 0],
    ['C', 1],
    ['G', 2],
    ['T', 3],
  ]);
  const result = [];
  const strLen = s.length;

  if (SUB_STR_LEN >= strLen) {
    return result;
  }

  let subStrBits = 0;

  // index 边界 -1，将第一次窗口滑动纳入处理流程
  for (let index = 0; index < SUB_STR_LEN - 1; ++index) {
    subStrBits = (subStrBits << CHAR_BIT_LEN) | charBit.get(s[index]);
  }

  const subStrTime = new Map();

  for (let index = 0; index <= strLen - SUB_STR_LEN; index++) {
    // index 边界 -1，将第一次窗口滑动纳入处理流程
    subStrBits =
      ((subStrBits << CHAR_BIT_LEN) | charBit.get(s[index + SUB_STR_LEN - 1])) &
      ((1 << (SUB_STR_LEN * CHAR_BIT_LEN)) - 1);
    subStrTime.set(subStrBits, (subStrTime.get(subStrBits) ?? 0) + 1);

    if (subStrTime.get(subStrBits) === 2) {
      result.push(s.slice(index, index + SUB_STR_LEN));
    }
  }

  return result;
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
