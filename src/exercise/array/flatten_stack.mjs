/**
 * Flatten
 *
 * @see {@link https://www.greatfrontend.com/questions/javascript/flatten | Flatten}
 */

/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  const stack = [value];
  const flattenArray = [];

  while (stack.length) {
    const elem = stack.pop();

    if (Array.isArray(elem)) {
      stack.push(...elem);
    } else {
      flattenArray.unshift(elem);
    }
  }

  return flattenArray;
}

// Single-level arrays are unaffected.
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(flatten([[1, 2], 3, [4, 5], 6])); // [1, 2, 3, 4, 5, 6]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
