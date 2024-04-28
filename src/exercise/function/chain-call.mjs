/**
 * 链式调用
 */
function Chain(...numbers) {
  const _numbers = [...numbers];

  const func = (...nums) => {
    _numbers.push(...nums);

    return func;
  };

  func.calculate = () => {
    return _numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  return func;
}

console.log(Chain(1).calculate());
console.log(Chain(1, 2).calculate());
console.log(Chain(1, 2)(3).calculate());
console.log(Chain(1, 2)(3)(4, 5).calculate());
