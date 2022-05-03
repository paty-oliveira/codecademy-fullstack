class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._CheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(isChecked) {
        this._isCheckedOut = isChecked;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        const totalSumRating = this._ratings.reduce((previousNumber, currentNumber) => previousNumber + currentNumber, 0);
        const numberRatings = this._ratings.length;

        return totalSumRating / numberRatings;
    }

    addRating(newRating) {
        this._ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    set pages(newNumberPages) {
        this._pages = newNumberPages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }

    set director(newDirector) {
        this._director = newDirector;
    }

    set runTime(newRunTime) {
        this._runTime = newRunTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    set artist(newArtist) {
        this._artist = newArtist;
    }

    addSong(song) {
        this._songs.push(song);
    }
}

const equals = (arrayA, arrayB) => { return JSON.stringify(arrayA) === JSON.stringify(arrayB) }



// Testing Space
// Media class
const exampleMedia = new Media('test1');
exampleMedia.addRating(2);
exampleMedia.addRating(2);

console.log('Should return True: Title name ->', exampleMedia.title == 'test1');
console.log('Should return True: Average rating ->', exampleMedia.getAverageRating() == 2)

// Book class
const bookOne = new Book('BookOne', 'Author1', 200);
bookOne.addRating(1);
bookOne.pages = 100;

console.log('Should return True: Author name ->', bookOne.author == 'Author1');
console.log('Should return True: Title name ->', bookOne.title == 'BookOne');
console.log('Should return True: Average rating ->', bookOne.getAverageRating() == 1);
console.log('Should return True: Set number of pages ->', bookOne.pages == 100);

// Movie class
const movieOne = new Movie('Movie1', 'Director1', 120);
movieOne.addRating(3);
movieOne.addRating(1);
movieOne.runTime = 100;

console.log('Should return True: Title name ->', movieOne.title == 'Movie1');
console.log('Should return True: Director name ->', movieOne.director == 'Director1');
console.log('Should return True: Average rating ->', movieOne.getAverageRating() == 2);
console.log('Should return True: Runtime ->', movieOne.runTime == 100);

// CD class
const cdOne = new CD('CD1', 'Artist1', ['Song1', 'Song2'])

console.log('Should return True: Artist name ->', cdOne.artist == 'Artist1')
console.log('Should return True: List of songs ->', equals(cdOne.songs, ['Song1', 'Song2']));

cdOne.addSong('Song4');
console.log('Should return True: List of songs ->', equals(cdOne.songs, ['Song1', 'Song2', 'Song4']));