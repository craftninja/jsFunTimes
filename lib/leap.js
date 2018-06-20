class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return this.year % 100 === 0 ? this.year % 400 === 0 : this.year % 4 === 0;
  }
}

module.exports = Year;
