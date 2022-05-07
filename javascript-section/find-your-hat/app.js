const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(playBoard) {
        this.__playBoard = playBoard;
    }

    print() {
        this.__playBoard.forEach(element => {
            console.log(element.join(''))
        });
    }
}



// Testing space

const playBoard = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
];
const fieldOne = new Field(playBoard);
fieldOne.print();