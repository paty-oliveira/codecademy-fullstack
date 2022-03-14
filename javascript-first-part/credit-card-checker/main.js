// Add your functions below:
function validateCreditCard(creditCardNumber) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < creditCardNumber.length; i++) {
        if (i % 2 === 0) {
            if (creditCardNumber[i] * 2 >= 10) {
                evenSum += ((creditCardNumber[i] * 2) - 9);
            } else {
                evenSum += creditCardNumber[i] * 2;
            }
        } else {
            oddSum += creditCardNumber[i];
        }
    }
    return (oddSum + evenSum) % 10 === 0;
}


function findInvalidCards(creditCards) {
    let invalidCards = [];
    for (let creditCard in creditCards) {
        for (let number in creditCard) {
            let creditCardNumber = creditCards[number];
            let isValid = validateCreditCard(creditCardNumber);

            if (!isValid) {
                invalidCards.push(creditCardNumber);
            }
        }
    }
    return invalidCards;
}

function idInvalidCardCompanies(creditCardNumbers) {
    const companyCodes = { 3: "Amex (American Express)", 4: "Visa", 5: "Mastercard", 6: "Discover" }
    let companies = [];

    for (let i in creditCardNumbers) {
        let number = creditCardNumbers[i];
        let firstDigit = number[0];
        companies.push(companyCodes[firstDigit]);
    }
    console.log(companies);

    return companies;
}

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Input data for testing all methods
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Testing validateCreditCard() logic
// Should return True
console.log("Testing validateCreditCard() implementation: Test case I: Should return True");
console.log("Test case I: Is a credit card valid? ")
console.log(validateCreditCard(valid1) === true);
console.log(validateCreditCard(valid2) === true);
console.log(validateCreditCard(valid3) === true);
console.log(validateCreditCard(valid4) === true);
console.log(validateCreditCard(valid5) === true);


// Should return False
console.log("Test case I: Is a credit cart invalid")
console.log(validateCreditCard(invalid1) === false);
console.log(validateCreditCard(invalid2) === false);
console.log(validateCreditCard(invalid3) === false);
console.log(validateCreditCard(invalid4) === false);
console.log(validateCreditCard(invalid5) === false);

console.log("Test case II: Return a list of credit card invalid")
console.log(equals(findInvalidCards([invalid1, invalid2, valid1]), [invalid1, invalid2]))

console.log("Test case III: Return a list of companies with credit card invalid")
console.log(equals(idInvalidCardCompanies([invalid1, invalid2]), ['Visa', 'Mastercard']))
console.log(equals(idInvalidCardCompanies([invalid3, invalid4]), ['Amex (American Express)', 'Discover']))