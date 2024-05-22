const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('adds 0 + 2 to equal 2', () => {
  expect(sum(0, 2)).toBe(2);
});

test('adds 1.5 + 2.5 to equal 4', () => {
  expect(sum(1.5, 2.5)).toBe(4);
});

test('returns NaN when non-numeric arguments are passed', () => {
  expect(isNaN(sum('a', 2))).toBe(true);
});

test('returns NaN when non-numeric arguments are passed', () => { 
  expect(isNaN(sum(2, 'a'))).toBe(true);
});

