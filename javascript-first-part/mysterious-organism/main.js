// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}


// Create object factory multiple for the organism
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        mutate() {
            const mutationPosition = Math.floor(Math.random() * 15);
            const mutationBase = returnRandBase();
            this.dna[mutationPosition] = mutationBase;
        },
        compareDNA(otherSpecimenDNA) {
            const differentDNABases = this.dna.filter(base => { return !otherSpecimenDNA.includes(base) });
            const percentageCommonDNA = Math.floor(((this.dna.length - differentDNABases.length) / this.dna.length) * 100);
            return `specimen #1 and specimen #2 have ${percentageCommonDNA}% DNA in common`;
        },
        willLikelySurvive() {
            const GCContent = this.dna.filter(base => { return base === 'G' || base === 'C' })
            const percentageGCContent = Math.floor(GCContent.length / this.dna.length * 100);
            return (percentageGCContent > 60);
        }
    }
}

// Return an array of pAequor species that can survive in their natural environment
const createpViableAerquourSpecimen = (numberSpecimen) => {
    let specimens = [];
    let specimenId = 1;

    while (specimens.length < numberSpecimen) {
        let newSpecimen = pAequorFactory(specimenId, mockUpStrand());
        if (newSpecimen.willLikelySurvive()) {
            specimens.push(newSpecimen);
        }
        specimenId++;
    }
    return specimens;
}


// Testing Space of P. aequor factory
const specimenNumOne = pAequorFactory(1, mockUpStrand())
const specimenNumTwo = pAequorFactory(2, mockUpStrand())

console.log("The first specimun should have identifier as 1 -> ", specimenNumOne.specimenNum === 1)
console.log("The second specimun should have identifier as 2 -> ", specimenNumTwo.specimenNum === 2)
console.log("The DNA strand length of first specimum should be 15 bases -> ", specimenNumOne.dna.length === 15)
console.log("The DNA strand length of second specimum should be 15 bases -> ", specimenNumTwo.dna.length === 15)

// Testing Space for mutate() method behavior
specimenNumOne.mutate()
console.log("The DNA strand length of first specimum mutated should be 15 bases -> ", specimenNumOne.dna.length === 15);


// Testing Space for compareDNA() method behavior
const specimenNumThree = pAequorFactory(3, ['A', 'G', 'G', 'G', 'T', 'T', 'C', 'C', 'C', 'G', 'G', 'T', 'T', 'C', 'G'])
let specimenDNA = ['A', 'G', 'G', 'G', 'T', 'T', 'C', 'C', 'C', 'G', 'G', 'T', 'T', 'C', 'G'];
let actualDNA = specimenNumThree.compareDNA(specimenDNA);
let expectedComparison = "specimen #1 and specimen #2 have 100% DNA in common";
console.log("All bases are identical on the same location, so should returns 100% of DNA in common ->", actualDNA === expectedComparison);


specimenDNA = ['T', 'G', 'G', 'G', 'T', 'T', 'C', 'C', 'C', 'G', 'G', 'T', 'T', 'C', 'G'];
actualDNA = specimenNumThree.compareDNA(specimenDNA);
expectedComparison = "specimen #1 and specimen #2 have 93% DNA in common";
console.log("Should returns 93% of DNA in common ->", actualDNA === expectedComparison);


// Testing Space for willLikelySurvive() method behavior
const specimenNumFour = pAequorFactory(4, ['A', 'T', 'G', 'G', 'T', 'T', 'C', 'C', 'C', 'G', 'G', 'G', 'A', 'C', 'G'])
console.log("The specimen has at least 60% of GC content on DNA ->", specimenNumFour.willLikelySurvive() === true)

const specimenNumFive = pAequorFactory(5, ['A', 'T', 'T', 'T', 'A', 'T', 'C', 'C', 'C', 'G', 'G', 'G', 'A', 'C', 'G']);
console.log("The specimen has not 60% of GC content on DNA, so will not survive ->", specimenNumFive.willLikelySurvive() === false);


// Testing Space for createpAerquourSpecimen() method behavior
const randomSpecimensOne = createpViableAerquourSpecimen(1);
console.log("Number of Specimen created should be 1 ->", randomSpecimensOne.length === 1);

const randomSpecimensTwo = createpViableAerquourSpecimen(30);
console.log("Number of Specimen created should be 30 ->", randomSpecimensTwo.length === 30);