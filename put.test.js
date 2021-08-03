const put = require('./put');
test('put function', () => {
    expect(put(3, 2)).toBe(0);
});