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

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);


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
        }
    }
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