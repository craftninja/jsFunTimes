class Binary{
    constructor(binary){
        this.binary = binary
    }

    toDecimal(){

        var regExp = /^[0-1]+$/;
         
        if (regExp.test(this.binary)){
            return parseInt(this.binary,2);
        }
        else {
            return 0;
        }
    }
}

module.exports = Binary; 




