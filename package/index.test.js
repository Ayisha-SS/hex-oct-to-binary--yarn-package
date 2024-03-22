const { hexToBinary, octToBinary } = require('./index')

test('Convert hexadecimal to binary', () => {
    expect(hexToBinary('1A')).toBe('11010');
    expect(hexToBinary('FF')).toBe('11111111');
});

test('Convert octal to binary', () => {
    expect(octToBinary('12')).toBe('1010');
    expect(octToBinary('777')).toBe('111111111');
});

