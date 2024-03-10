/**
 * 443. 压缩字符串
 *
 * @see {@link https://leetcode.com/problems/string-compression/}
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let left = 0;
  let write = 0;

  // 需要考虑循环的边界，最后一个元素需要统一处理
  for (let read = 0; read < chars.length; read++) {
    // 判断下一个元素是否和当前元素相同
    if (read === chars.length - 1 || chars[read] !== chars[read + 1]) {
      chars[write++] = chars[read];
      const charLen = read - left + 1;

      if (charLen > 1) {
        const charLenStr = charLen.toString();

        for (
          let charLenIndex = 0;
          charLenIndex < charLenStr.length;
          charLenIndex++
        ) {
          chars[write++] = charLenStr[charLenIndex];
        }
      }

      // 记录下一个相同字串的起点
      left = read + 1;
    }
  }

  return write;
};

const numbers = [
  'a',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
];

const nums = ['a', 'b'];

console.log(compress(numbers), numbers);
console.log(compress(nums), nums);
