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
  const result = [];

  function recursive(array) {
    array.forEach((elem) => {
      if (Array.isArray(elem)) {
        recursive(elem);
      } else {
        result.push(elem);
      }
    });
  }

  recursive(value);

  return result;
}

// Single-level arrays are unaffected.
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(flatten([[1, 2], 3, [4, 5], 6])); // [1, 2, 3, 4, 5, 6]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
