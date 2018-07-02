class Binary {
  constructor(binary) {
    this.binary = binary;
  }

  toDecimal() {
    return !/[^01]/.test(this.binary) ? parseInt(this.binary, 2) : 0;
  }
}

module.exports = Binary;
