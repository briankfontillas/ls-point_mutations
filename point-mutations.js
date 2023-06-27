class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(distanceStrand) {
    let count = 0;
    let shorterStrand = this.strand.length < distanceStrand.length
      ? this.strand
      : distanceStrand;
    
    if (distanceStrand !== this.strand) {
      for (let index = 0; index < shorterStrand.length; index += 1) {
        if (this.strand[index] !== distanceStrand[index]) count += 1; 
      }
    }

    return count;
  }
}

module.exports = DNA;