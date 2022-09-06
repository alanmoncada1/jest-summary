const text = "Hello World!";
const fruits = ['apple', 'bannana', 'Cantaloupe'];



/**
 * Execute after each test 
 */
afterEach(() => console.log("After each test execute this."));

/**
 * Execute after all tests 
 */
 afterAll(() => console.log("After all tests execute this."));

/**
 * Execute before each test
 */
beforeEach(() => console.log("Before each test execute this."));

/**
 * Execute before all tests
 */
 beforeAll(() => console.log("Before all execute this."));

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


/**
 * Test a Promise
 */
const reverseStringPromise = str => {
    return new Promise((resove, reject) => {

        if(!str)
            reject(console.error('Error'))

        resove(str.split("").reverse().join(""));

    });
}

test('Test a promise', () => {
    return reverseStringPromise('Hi').then( string => {
        expect(string).toBe('iH');
    });
});

/**
 * Test Async/Await
 */
test('Test Async/Await', async () => {
    const string = await reverseStringPromise('Hi');

    expect(string).toBe('iH');
});