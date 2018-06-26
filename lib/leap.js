class Year {

    constructor(year) {
        this.year = year;
    }

    isLeap() {
        const { year } = this;
        return !(year % 4) && !!(year % 100) || !(year % 400);
    }

}

module.exports = Year;