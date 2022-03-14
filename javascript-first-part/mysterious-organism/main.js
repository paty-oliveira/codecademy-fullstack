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

specimenNumOne.mutate()
console.log("The DNA strand length of first specimum mutated should be 15 bases -> ", specimenNumOne.dna.length === 15);