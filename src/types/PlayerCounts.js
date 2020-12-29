class PlayerCounts {
  constructor({ min, max }) {
    this.min = min;
    this.max = max;
  }

  toString = () => {
    if (this.min === this.max) return this.min;
    return `${this.min}-${this.max}`;
  };
}

export default PlayerCounts;
