const stringLength = require('../stringLength');

it('calculates a string length', () => {
  expect(stringLength('hello')).toBe(5)
});

it('requires the string to be at least one char length', () => {
  expect(() => stringLength('')).toThrow();
})

it('requires the string to be max 10 chars long', () => {
  expect(() => stringLength('This string should not pass')).toThrow();
})