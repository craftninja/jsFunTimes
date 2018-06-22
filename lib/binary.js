class Binary {
  constructor(binary) {
    this.binary = binary;
  }

  toDecimal() {
    return this.binary.match('^[0-1]*$') ? parseInt(this.binary, 2) : 0;
  }
  
}
module.exports = Binary;
