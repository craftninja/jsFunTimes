class Binary{
    constructor(binary){
        this.binary = binary;
    }

    toDecimal(){
        var reg = /^[0-1]+$/;
        if (reg.test(this.binary)){
            return parseInt(this.binary,2);
        }
        else {
            return 0;
        }
    }
}
module.exports = Binary;