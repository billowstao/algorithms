/**
 * Debounce
 *
 * @see {@link https://www.greatfrontend.com/questions/javascript/debounce | Debounce}
 */

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer = 0;

  function debouncedFun() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func();
    }, wait);
  }

  return debouncedFun;
}

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
setTimeout(() => {
  debouncedIncrement();
}, 50); // i = 0

setTimeout(() => {
  console.log(i);
}, 150); // i = 0

setTimeout(() => {
  console.log(i);
}, 152);
