const testArray = [1, 2, 3, 4, 5];

function sumFor(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i += 1) {
    sum += input[i];
  }
  return sum;
}
console.log(sumFor(testArray));// 15


function sumWhile(input) {
  let sum = 0;
  let i = 0;
  while (i < input.length) {
    sum += input[i];
    i += 1;
  }
  return sum;
}
console.log(sumWhile(testArray));// 15

function sumRecursion(input) {
  if (input.length === 0) {
    return 0;
  }
  return input[0] + sumRecursion(input.slice(1, input.length));
}
console.log(sumRecursion(testArray));// 15


function sumTheSimpleWay(input) {
  return _(input).reduce(function sum(s, n) { return s + n; });
}
console.log(sumTheSimpleWay(testArray));// 15
