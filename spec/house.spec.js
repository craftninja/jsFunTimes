const house = require('../lib/house');

describe('House', function() {
  it('returns a 1x1 house with a 1 passed in', function() {
    const actual = house(1);
    const expected = `
 ^
/ \\
|_|`;
    expect(actual).toBe(expected);
  });
  it('returns a 2x2 house with a 2 passed in', function() {
    const actual = house(2);
    const expected = `
 /\\
/  \\
|  |
|__|`;
    expect(actual).toBe(expected);
  });
  it('returns a 3x3 house with door with a 3 passed in', function() {
    const actual = house(3);
    const expected = `
  ^
 / \\
/   \\
| _ |
|| ||
|| ||`;
    expect(actual).toBe(expected);
  });
  it('returns a 3x3 house with door by default', function() {
    const actual = house();
    const expected = `
  ^
 / \\
/   \\
| _ |
|| ||
|| ||`;
    expect(actual).toBe(expected);
  });
  it('returns a 2x3 house with 2 and 3 passed in', function() {
    const actual = house(2, 3);
    const expected = `
  ^
 / \\
/   \\
| _ |
|| ||`;
    expect(actual).toBe(expected);
  });
  it('returns a 5x3 house with 5 and 3 passed in', function() {
    const actual = house(5, 3);
    const expected = `
  ^
 / \\
/   \\
|   |
|   |
| _ |
|| ||
|| ||`;
    expect(actual).toBe(expected);
  });
  it('returns a 5x5 house with 5 passed in', function() {
    const actual = house(5);
    const expected = `
   ^
  / \\
 /   \\
/     \\
|     |
|     |
|  _  |
| | | |
|_| |_|`;
    expect(actual).toBe(expected);
  });
  it('returns a 5x10 house with 5, 10 passed in', function() {
    const actual = house(5, 10);
    const expected = `
     /\\
    /  \\
   /    \\
  /      \\
 /        \\
/          \\
|  _    _  |
| |_|  |_| |
|     _    |
|    | |   |
|____| |___|`;
    expect(actual).toBe(expected);
  });
});
