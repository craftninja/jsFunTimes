class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = null;
    this.side2 = null;
    this.side3 = null;
    if (side1 > 0 && side2 > 0 && side3 > 0
      && side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  }
  kind() {
    let triangleType = null;
    if (this.side1 && this.side2 && this.side3) {
      if (this.side1 === this.side2 && this.side2 === this.side3) {
        triangleType = 'equilateral';
      }
      else if (this.side2 === this.side3 || this.side1 === this.side2 || this.side1 === this.side3) {
        triangleType = 'isosceles';
      }
      else {
        triangleType = 'scalene';
      }
    }
    if (!triangleType) {
      throw new Error("not a triangle");
    }
    return triangleType;
  }
}

module.exports = Triangle;
