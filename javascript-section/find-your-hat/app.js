const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let currentlyPlaying = true;
class Field {
    constructor(playBoard) {
        this._playBoard = playBoard;
        this._y = 0;
        this._x = 0;
    }

    print() {
        this._playBoard.forEach(element => {
            console.log(element.join(''))
        });

    }

    ask() {
        const move = prompt('Which way?').toLowerCase();

        if (['d', 'l', 'r', 'u'].includes(move)) {
            switch (move) {
                case 'u':
                    console.log('Moving Up');
                    this._y -= 1;
                    break;

                case 'd':
                    console.log('Moving Down');
                    this._y += 1;
                    break;

                case 'l':
                    console.log('Moving Left');
                    this._x -= 1;
                    break;

                case 'r':
                    console.log('Moving Right');
                    this._x += 1;
                    break;

                default:
                    break;
            }
        } else {
            console.log('Out of Bounds')
        }
    }

    checkWin() {
        if (this._playBoard[this._y] == undefined) {
            console.log('You lose - Out of boundary')
            return currentlyPlaying = false;
        }

        switch (this._playBoard[this._x][this._y]) {
            case hole:
                console.log('You lose - You fell in a hole!');
                currentlyPlaying = false;
                break;

            case undefined:
                console.log('You lose - Out of boundary');
                currentlyPlaying = false;
                break;

            case hat:
                console.log('You win - You found the hat!');
                currentlyPlaying = false;
                break;

            case fieldCharacter:
                console.log('Keep looking for the hat ...');
                this._playBoard[this._x][this._y] = pathCharacter;
                break;

            case pathCharacter:
                console.log('You are stepping on *');
                break;
        }
    }
}



// Testing space

const playBoard = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
];

const myField = new Field(playBoard);

function game() {
    while (currentlyPlaying) {
        console.log(myField.print());
        myField.ask();
        myField.checkWin();
    }
    console.log('Game Over!');
}

game();