function Binary(binaryNumber) {
    this.binaryNumber = binaryNumber;
}

Binary.prototype.toDecimal = function () {
    let binaryNumber = this.binaryNumber;
    if (binaryNumber.match('^[0-1]*$')) {
        var decimal = parseInt(this.binaryNumber, 2);
        return decimal;
    }
    else
        return 0;
};

module.exports = Binary;