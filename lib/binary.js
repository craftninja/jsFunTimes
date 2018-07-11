
module.exports = function (binaryValue) {
    this.binaryValue = binaryValue;
    var binaryRegex = /[^0,1]/;
    this.toDecimal = function () {
        return !binaryRegex.test(this.binaryValue) && parseInt(this.binaryValue, 10) ? parseInt(this.binaryValue, 2) : 0;
    }

}