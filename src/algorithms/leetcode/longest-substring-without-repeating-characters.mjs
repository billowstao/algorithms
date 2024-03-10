/**
 * 3. 无重复字符的最长子串
 *
 * @see {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/}
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const uniqueStr = new Set();
  const strLen = s.length;
  let right = -1;
  let maxLen = 0;

  for (let index = 0; index < strLen; index++) {
    if (index !== 0) {
      uniqueStr.delete(s[index - 1]);
    }

    while (right + 1 < strLen && !uniqueStr.has(s[right + 1])) {
      uniqueStr.add(s[right + 1]);
      right++;
    }

    const length = right - index + 1;

    if (length > maxLen) {
      maxLen = length;
    }
  }

  return maxLen;
};
