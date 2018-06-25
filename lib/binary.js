
function Binary(number) {
    this.num = number;
}

Binary.prototype.toDecimal = function () {
    this.number = this.num;
    if (isNaN(this.num))
        return 0;
    else {
        for (i = 0; i < this.num; i++) {
            let binary = parseInt(this.num);
            if (binary % 10 > 1)
                return 0;
            this.num = this.num / 10;
        }
        return parseInt(this.number, 2);
    }
}

module.exports = Binary;


// var result=new Binary('012');

// console.log(result.toDecimal());

