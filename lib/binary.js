class Binary{
    constructor(binary){
        this.binary = binary;
    }

    toDecimal(){
        var decimal = 0
        if (this.binary.search(/^[10]+$/) != -1){
            var i = this.binary.length;
            var n = 0
            while(i--){
                decimal += this.binary.charAt(i) * 2**n
                n++
            }
            console.log('decimal', decimal)
        } 
        return decimal
    }
}

module.exports = Binary