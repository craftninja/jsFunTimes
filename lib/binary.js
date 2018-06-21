class Binary {
  constructor(binary) {
    this.binary = binary;
  }
  toDecimal() {
    return this.binary % 10 > 1
      ? 0
      : isNaN(this.binary) ? 0 : parseInt(this.binary, 2);
  }
}
module.exports = Binary;
