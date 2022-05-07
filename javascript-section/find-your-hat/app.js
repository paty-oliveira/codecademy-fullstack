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

    move() {
        let direction = prompt('Which way?').toLowerCase();
        direction = String(direction)

        if (['d', 'l', 'r', 'u'].includes(direction)) {
            console.log('In Bounds')
        } else {
            console.log('Out of Bounds')
        }

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