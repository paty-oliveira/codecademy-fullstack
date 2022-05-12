const Calculate = {
    factorial(inputNumber) {

        if (inputNumber === 0 || inputNumber === 1) {
            return 1;

        }
        return inputNumber * this.factorial(inputNumber - 1);
    }
}

module.exports = Calculate;