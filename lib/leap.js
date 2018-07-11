module.exports = function (yr) {
    this.year = yr;
    this.isLeap = function () {
        if ((this.year % 100 === 0) ? (this.year % 400 === 0) : (this.year % 4 === 0)) {
            return true;
        } else {
            return false;
        }
    }

}