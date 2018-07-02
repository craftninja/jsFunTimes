class Triangle {
  constructor(a, b, c) {
    this.sideOrder = [a, b, c].sort((a, b) => a - b);
  }

  kind() {
    this.validate();
    let prev = this.sideOrder[0];
    let prevMaxCout = 0;
    let prevCount = 0;
    this.sideOrder.forEach(ele => {
      if (prev !== ele) {
        prev = ele;
        prevCount = 1;
      } else {
        prevCount++;
      }
      if (prevMaxCout < prevCount) prevMaxCout = prevCount;
    });
    if (prevMaxCout === 3) {
      return 'equilateral';
    } else if (prevMaxCout === 2) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
  validate() {
    if (
      this.sideOrder[0] + this.sideOrder[1] < this.sideOrder[2] ||
      this.sideOrder.filter(side => side <= 0).length > 0
    ) {
      throw Error();
    }
  }
}

module.exports = Triangle;
