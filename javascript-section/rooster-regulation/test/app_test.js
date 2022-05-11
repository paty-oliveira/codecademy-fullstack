const assert = require('assert');
const Rooster = require('../app');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('should return a string', () => {
            // Setup
            const expectedResult = 'moo!';

            // Exercise
            const actualResult = Rooster.announceDawn();

            // Verify

            assert.equal(expectedResult, actualResult);
        });
    });

    describe('timeAtDawn', () => {
        it('should throw an exception when the passed hour is negative', () => {
            // Setup
            const hour = -1;

            // Verify
            assert.throws(() => Rooster.timeAtDawn(hour), RangeError);
        })

        it('should throw an exception when the passed hour greater than 24', () => {
            // Setup
            const hour = 25;

            // Verify
            assert.throws(() => Rooster.timeAtDawn(hour), RangeError);
        })

        it('should not throw an exception when the passed hour is a valid hour', () => {
            // Setup
            const hour = 12;

            // Verify
            assert.doesNotThrow(() => Rooster.timeAtDawn(hour), RangeError);
        })

        it('should return the hour in string when the passed hour is a valid hour', () => {
            // Setup
            const hour = 18;
            const expectedResult = '18';

            // Exercise
            const actualResult = Rooster.timeAtDawn(hour);

            // Verify
            assert.strictEqual(expectedResult, actualResult);
        })
    });
});