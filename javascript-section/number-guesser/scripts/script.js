let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function getAbsoluteDistance(currentGuess, targetGuess) {
    return Math.abs(currentGuess - targetGuess);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    return getAbsoluteDistance(currentHumanGuess, target) <= getAbsoluteDistance(computerGuess, target) ?
        true : false;
}

function updateScore(winner) {
    return winner === "human" ? humanScore++ : computerScore++;
}

function advanceRound() {
    currentRoundNumber++;
}