/**
 * 49. Group Anagrams
 * @see {@link https://leetcode.com/problems/group-anagrams/description/}
 */

/**
 * @param {string[]} strs - strings
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const sortedMap = new Map();

  strs.forEach((str) => {
    const sortedStr = Array.from(str).sort().join('');

    if (!sortedMap.has(sortedStr)) {
      sortedMap.set(sortedStr, [str]);
    } else {
      sortedMap.get(sortedStr).push(str);
    }
  });

  return Array.from(sortedMap.values());
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
