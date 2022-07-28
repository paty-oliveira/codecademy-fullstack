console.log = function() {};
const { expect } = require('chai');
const rewire = require('rewire');
const fs = require('fs');

describe('', function() {
  it('', function() {
    // Rewire the file
    // Path is relative to this file in ./test
    let appModule;
    try {
        appModule = rewire('../features/counter/counterSlice.js');
    } catch (e) {
        expect(true, 'Try checking your code again. You likely have a syntax error.' + e).to.equal(false);
    }

    // Check, using regex, that createSlice() was called
    // Path is relative to root
    const code = fs.readFileSync('./features/counter/counterSlice.js', 'utf8');
    const callsMethod = code.match(/createSlice\(/);

    expect(
      callsMethod,
      `Make sure to call \`createSlice()\`.`
    ).to.not.be.null;


    // "Get" the slice variable
    let varLearnerDeclares;
    let learnerVariableName = 'counterSlice';
    try {
        varLearnerDeclares = appModule.__get__(learnerVariableName);
    } catch (e) {
        expect(true, `Did you define a \`${learnerVariableName}\` variable?`).to.equal(false);
    }

    // Check that slice variable is actually a slice
    const basicMessage = `Make sure to store the result of \`createSlice()\` in the variable \`counterSlice\`.`;
    expect(varLearnerDeclares, basicMessage).to.be.an('object');
    expect(varLearnerDeclares, basicMessage).to.have.property('actions');
    expect(varLearnerDeclares, basicMessage).to.have.property('reducer');

    // Test slice reducer functionality
    const reducer = varLearnerDeclares.reducer;
    const expectedState = {
      value: 1
    };
    const actualState = reducer(undefined, { type: 'counter/increment' });

    expect(true, `type of reducer: ${typeof(reducer)}.`).to.equal(false);


    expect(
      actualState,
      `In your argument to \`createSlice()\`, did you define a \`reducers\` property with an \`increment\` field?`
    ).to.deep.equal(expectedState);
  });
});