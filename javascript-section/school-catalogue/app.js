class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newStudentsNumber) {
        if (typeof(newStudentsNumber) == 'number') {
            this._numberOfStudents = newStudentsNumber;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() {
        return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomTeacherIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacherIndex];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const equals = (arrayA, arrayB) => { return JSON.stringify(arrayA) === JSON.stringify(arrayB) }


// Testing Space
// School class

const school = new School('School1', 'Level1', 140);

console.log('Should return True: School name ->', school.name == 'School1');
console.log('Should return True: School level ->', school.level == 'Level1');
console.log('Should return True: School number of students ->', school.numberOfStudents == 140);
console.log('Should return True: School quick facts ->', school.quickFacts() == 'School1 educates 140 students at the Level1 school level.')

// PrimarySchool class
const primarySchool = new PrimarySchool('PrimarySchool1', 50, 'Policy1');

console.log('Should return True: Primary School level ->', primarySchool.level == 'primary');
console.log('Should return True: Primary School policy ->', primarySchool.pickupPolicy == 'Policy1');
console.log('Should return True: School number of students ->', primarySchool.numberOfStudents == 50);
console.log('Should return True: School quick facts ->', primarySchool.quickFacts() == 'PrimarySchool1 educates 50 students at the primary school level.')

// MiddleSchool class
const middleSchool = new MiddleSchool('MiddleSchool1', 90);

console.log('Should return True: Middle School level ->', middleSchool.level == 'middle');
console.log('Should return True: School number of students ->', middleSchool.numberOfStudents == 90);
console.log('Should return True: School quick facts ->', middleSchool.quickFacts() == 'MiddleSchool1 educates 90 students at the middle school level.')

// HighSchool class
const highSchool = new HighSchool('HighSchool1', 300, ['Baseball', 'Basketball']);

console.log('Should return True: High School level ->', highSchool.level == 'high');
console.log('Should return True: School number of students ->', highSchool.numberOfStudents == 300);
console.log('Should return True: High School sport teams ->', equals(highSchool.sportsTeams, ['Baseball', 'Basketball']));
console.log('Should return True: School quick facts ->', highSchool.quickFacts() == 'HighSchool1 educates 300 students at the high school level.')