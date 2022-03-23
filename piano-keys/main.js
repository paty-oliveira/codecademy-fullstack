// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
    notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
let keyPlay = function(event){
    event.target.style.backgroundColor = 'green';
}

let keyReturn = function(event){
    event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
let handlerColorChanges = function(note){
    note.onmousedown = keyPlay;
    note.onmouseup = keyReturn;
}

// Write a loop that runs the array elements through the function
notes.forEach(handlerColorChanges);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These variables store information about the words buttons
let wordOne = document.getElementById('word-one');
let wordTwo = document.getElementById('word-two');
let wordThree = document.getElementById('word-three');
let wordFour = document.getElementById('word-four');
let wordFive = document.getElementById('word-five');
let wordSix = document.getElementById('word-six');

// These variables store information about the notes buttons
let noteOne = document.getElementById('letter-note-one');
let noteTwo = document.getElementById('letter-note-two');
let noteThree = document.getElementById('letter-note-three');
let noteFour = document.getElementById('letter-note-four');
let noteFive = document.getElementById('letter-note-five');
let noteSix = document.getElementById('letter-note-six');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function(){
    nextTwo.hidden = false;
    nextOne.hidden = true;
    noteFive.innerHTML = 'D';
    noteSix.innerHTML = 'C';
};

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function(){
    nextThree.hidden = false;
    nextTwo.hidden = true;
    wordFive.innerHTML = 'DEAR';
    wordSix.innerHTML = 'FRI-';
    lastLyric.style.display = 'inline-block';
    noteThree.innerHTML = 'G';
    noteFour.innerHTML = 'E';
    noteFive.innerHTML = 'C';
    noteSix.innerHTML = 'B';
};

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function(){
    startOver.hidden = false;
    nextThree.hidden = true;
    wordOne.innerHTML = 'HAP-';
    wordTwo.innerHTML = 'PY';
    wordThree.innerHTML = 'BIRTH';
    wordFour.innerHTML = 'DAY';
    wordFive.innerHTML = 'TO';
    wordSix.innerHTML = 'YOU!';
    noteOne.innerHTML = 'F';
    noteTwo.innerHTML = 'F';
    noteThree.innerHTML = 'E';
    noteFour.innerHTML = 'C';
    noteFive.innerHTML = 'D';
    noteSix.innerHTML = 'C';
    lastLyric.style.display = 'none';
};

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
    nextOne.hidden = false;
    startOver.hidden = true;
    wordOne.innerHTML = 'HAP-';
    noteOne.innerHTML = 'G';
    wordTwo.innerHTML = 'PY';
    noteTwo.innerHTML = 'G';
    wordThree.innerHTML = 'BIRTH-';
    noteThree.innerHTML = 'A';
    wordFour.innerHTML = 'DAY';
    noteFour.innerHTML = 'G';
    wordFive.innerHTML = 'TO';
    noteFive.innerHTML = 'C';
    wordSix.innerHTML = 'YOU!';
    noteSix.innerHTML = 'B';
};