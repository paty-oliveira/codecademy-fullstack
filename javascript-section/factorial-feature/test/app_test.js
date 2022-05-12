var assert = require("assert");
var Calculate = require('../app.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('should return 1 when the input number is 0', () => {
            // Setup
            const inputNumber = 0;
            const expectedResult = 1;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);

        });

        it('should return 1 when the input number is 1', () => {
            // Setup
            const inputNumber = 1;
            const expectedResult = 1;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);
        });

        it('should return 2 when the input number is 2', () => {
            // Setup
            const inputNumber = 2;
            const expectedResult = 2;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);
        });

        it('should return 6 when the input number is 3', () => {
            // Setup
            const inputNumber = 3;
            const expectedResult = 6;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);
        });

        it('should return 120 when the input number is 5', () => {
            // Setup
            const inputNumber = 5;
            const expectedResult = 120;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);

        });


    });
});