import {formatStr} from './str';

describe('string functions', () => {
  describe('formatStr', () => {
    it('formats a string appropriately', () => {
      let str = formatStr('bloop bloop');

      expect(str).toBe('bloop_bloop');
    });
  });
});
