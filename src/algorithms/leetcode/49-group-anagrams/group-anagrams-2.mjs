/**
 * 49. Group Anagrams
 * @see {@link https://leetcode.com/problems/group-anagrams/description/}
 */

/**
 * @param {string[]} strs - strings
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  if (!strs.length) {
    return [];
  }

  const group = new Map();
  const count = new Array(26);

  strs.forEach((str) => {
    count.fill(0);

    Array.from(str).forEach((currentStr) => {
      const offsetPoint = currentStr.codePointAt(0) - 'a'.codePointAt(0);
      count[offsetPoint]++;
    });

    const key = count.toString();

    if (!group.has(key)) {
      group.set(key, []);
    }

    group.get(key).push(str);
  });

  return Array.from(group.values());
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
