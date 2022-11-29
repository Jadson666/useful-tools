import { injectPathParams } from './url';

test('injectPathParams', () => {
  const result = injectPathParams('/issuer/:coinId/network/list', { coinId: 1234 });
  expect(result).toBe('/issuer/1234/network/list')
});
