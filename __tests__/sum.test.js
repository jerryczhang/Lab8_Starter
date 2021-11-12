// sum.test.js

const { expect, test } = require("@jest/globals");

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

const { sum } = require('../assets/scripts/sum.js');
console.log(typeof(sum));
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
