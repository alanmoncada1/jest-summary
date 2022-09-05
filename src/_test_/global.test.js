const text = "Hello World!";
const fruits = ['apple', 'bannana', 'Cantaloupe'];

/**
 * Test to try to search a match in a given string
 */
test('Must to have a text', () => {
    expect(text).toMatch(/World/);
});

/**
 * Test to search an element inside an array
 */
test('Seach an element in an array', () => {
    expect(fruits).toContain('bannana')
});

/**
 * Test if a value is greater than other
 */
test('Greater than', () => {
    expect(10).toBeGreaterThan(9);
});

/**
 * Test a Boolean
 */
test('Is true', () => {
    expect(true).toBeTruthy();
});

/**
 * Test a Callback
 */
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test("Test a callback", () => {
    reverseString('hi', (str) => {
        expect(str).toBe('ih');
    });
});
