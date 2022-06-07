const capitalize = require('../capitalize');

it('capitalize the first character og a string', () => {
  expect(capitalize('hello microverse')).toBe('Hello microverse');
});