const compare = require('../compare');

test('compare hello with hello, result 0',
  () => { expect(compare('hello', 'hello')).toBe(0); });

test('compare can with ban, result >0',
  () => { expect(compare('can', 'ban')).toBe(1); });