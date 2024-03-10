/**
 * 187. 重复的DNA序列
 *
 * @see {@link https://leetcode.com/problems/repeated-dna-sequences/}
 */

/**
 * @param {string} s
 * @return {string[]}
 */
 const findRepeatedDnaSequences = function (s) {
  const strLen = s.length;
  const subStrLength = 10;
  const charMap = new Map([
    ['A', 0],
    ['C', 1],
    ['G', 2],
    ['T', 3],
  ]);
  const CHAR_BITS = 2;
  const subStrNum = new Map();
  let subStrBits = 0;

  for (let index = 0; index < subStrLength - 1; ++index) {
    const char = s[index];
    subStrBits = (subStrBits << CHAR_BITS) | charMap.get(char);
  }

  const result = [];

  for (let index = subStrLength - 1; index < strLen; ++index) {
    subStrBits =
      ((subStrBits << CHAR_BITS) | charMap.get(s[index])) &
      ((1 << (subStrLength * CHAR_BITS)) - 1);
    subStrNum.set(subStrBits, (subStrNum.get(subStrBits) ?? 0) + 1);

    if (subStrNum.get(subStrBits) === 2) {
      result.push(s.slice(index - subStrLength + 1, index + 1));
    }
  }

  return result;
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
