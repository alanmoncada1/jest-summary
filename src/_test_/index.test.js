const randomStrings = require('../index');

/** 
 * Describe allows you to test multiple flows in groups
 */
describe('Test functionalities of randomStrings', () => {
    /**
     * Test the type of a function in the main directory.
     */
    test('To test function', () => {
        expect(typeof(randomStrings())).toBe('string');
    });

    /**
     * Verify a city.
     */
    test('Test if the cities have an especific city', () => {
        expect(randomStrings()).not.toMatch(/Cordova/);
    });
})