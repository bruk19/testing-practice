const reverseString = require('../reverseString');

it('should take a string and reverse it', () => {
  expect(reverseString('hello')).toBe('olleh');
});