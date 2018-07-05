class Binary {
  constructor(number) {
    this.number = number
  }

  toDecimal() {
    let decimalValue = 0
    var expression = new RegExp("^[01]+$");
    if (expression.test(this.number)) {
      decimalValue = parseInt(this.number, 2);
    }
    return decimalValue;
  }
}

module.exports = Binary