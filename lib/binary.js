function Binary(number) {

  if (isNaN(number)) {
    this.num = 0;
  }
  else {
    this.num = parseInt(number);
  }
}

Binary.prototype.toDecimal = function () {
  let number = this.num;
  for (i = 0; number; i++) {
    let rem = parseInt(number % 10);
    if (rem > 1) {
      return 0;
    }
    number = parseInt(number / 10);
  }
  return parseInt(this.num, 2);
};

module.exports = Binary;