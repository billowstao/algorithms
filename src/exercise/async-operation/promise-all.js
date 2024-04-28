/**
 * Promise.all
 *
 * @see {@link https://greatfrontend.com/questions/javascript/promise-all | Promise.all}
 */
/**
 * 实现 Promise.all 类似的方法
 */
function promiseAll(iterable) {
  const results = [];
  let completedNum = 0;

  return new Promise((resolve, reject) => {
    iterable.forEach(async (promise, index) => {
      try {
        results[index] = await Promise.resolve(promise);
        completedNum++;

        if (completedNum >= iterable.length) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 100);
// });

// console.log(await promiseAll([p0, p1, p2])); // [3, 42, 'foo']

const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  console.log(await promiseAll([p0, p1]));
} catch (err) {
  console.log(err); // 'An error occurred!'
}
